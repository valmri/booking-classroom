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
        const { nom, prenom, email, role_id } = response.data[0];

        const user = {
          nom,
          prenom,
          email,
          role_id,
        };

        const jwtToken: string = await this.genJwtToken(user);
        return res.status(200).json({ succress: true, data: jwtToken });
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
        const { nom, prenom, email, role_id } = response.data[0];

        const user = {
          nom,
          prenom,
          email,
          role_id,
        };

        const jwtToken: string = await this.genJwtToken(user);

        return res.status(200).json({ success: true, data: jwtToken });
      } else {
        return res
          .status(403)
          .json({ success: false, data: "Échec de l'authentification" });
      }
    }
  }

  async genJwtToken(user: {
    nom: string;
    prenom: string;
    email: string;
    role_id: string;
  }) {
    const token = jwt.sign(
      {
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        role: user.role_id,
      },
      this.jwtSecret,
      {
        expiresIn: "1h",
      }
    );

    return token;
  }
}
