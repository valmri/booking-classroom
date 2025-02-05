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

  async getOneUtilisateur(req: Request, res: Response) {
    const id:number = parseInt(req.params.id);
    let response = await this.model.getOne(id);
    res.json(response);
  }

  async createUtilisateur(req: Request, res:Response) {
    const name: string = req.body.name;
  }
}
