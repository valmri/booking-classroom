import { Request, Response } from "express";
import { UtilisateursModel } from "../models/utilisateurs.model";
import jwt from "jsonwebtoken";
import Config from "../config";
import bcrypt from "bcrypt";

export class AuthentificationController {
  private utilisateurModel: UtilisateursModel;
  private jwtSecret: string;

  constructor(model: UtilisateursModel, config: typeof Config) {
    this.utilisateurModel = model;
    this.jwtSecret = config.JWT_SECRET || "";
  }

  async signup(req: Request, res: Response) {
    const nom: string = req.body.nom;
    const prenom: string = req.body.prenom;
    const email: string = req.body.email;
    const mot_de_passe: string = req.body.mot_de_passe;

    if (nom && prenom && email && mot_de_passe) {
      const response = await this.utilisateurModel.create(
        nom,
        prenom,
        email,
        mot_de_passe,
        1
      );

      if (!response.success) {
        return res
          .status(500)
          .json({ success: false, data: "Compte existant." });
      } else {
        const jwtToken: Promise<any> = this.genJwtToken(email);
        return res.status(200).json({ succress: true, date: jwtToken });
      }
    } else {
      return res
        .status(204)
        .json({ success: false, data: "Formulaire incomplet." });
    }
  }

  async login(req: Request, res: Response) {
    const email: string = req.body.email;
    const mot_de_passe: string = req.body.mot_de_passe;

    const response = await this.utilisateurModel.getOneByEmail(email);

    if (response.success) {
      const isMatch: boolean = await bcrypt.compare(
        mot_de_passe,
        response.data[0].mot_de_passe
      );
      if (isMatch) {
        const jwtToken: string = await this.genJwtToken(email);
        const user: { email: string; role: number; token: string } = {
          email: response.data[0].email,
          role: response.data[0].role_id,
          token: jwtToken,
        };
        return res.status(200).json({ success: true, data: user });
      } else {
        return res
          .status(403)
          .json({ success: false, data: "Échec de l'authentification" });
      }
    }
  }

  async genJwtToken(email: string) {
    const token = jwt.sign({ email: email }, this.jwtSecret, {
      expiresIn: "1h",
    });

    return token;
  }
}
