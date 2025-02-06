import { Request, Response } from "express";
import { UtilisateursModel } from "../models/utilisateurs.model";
import jwt from "jsonwebtoken";
import Config from "../config";

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
        0
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

    // Create Utilisateur
    // If exist -> renvoie erreur comme quoi utilisateur existe
  }

  async login(req: Request, res: Response) {
    const email: string = req.body.email;
    const mot_de_passe: string = req.body.mot_de_passe;

    // get Utilisateur by username et password
    // SI OK -> création jwtToken
    // SINON renvoyer chier
  }

  async genJwtToken(req: Request, res: Response) {
    const token = jwt.sign("abracadabra@gmail.fr", this.jwtSecret, {
      expiresIn: "1h",
    });
    return res.status(200).json({ token });
  }
}
