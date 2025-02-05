import { UtilisateursModel } from "../models/utilisateurs.model";
import { Request, Response } from "express";

export class UtilisateursController {
  private model: UtilisateursModel;

  constructor(model: UtilisateursModel) {
    this.model = model;
  }

  async getAllUtilisateurs(req: Request, res: Response) {
    let response = await this.model.getAll();
    res.json(response);
  }
}
