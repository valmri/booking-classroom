import { UtilisateursModel } from "../models/utilisateurs.model";
import { Request, Response } from "express";

export class UtilisateursController {
  private model: UtilisateursModel;

  constructor(model: UtilisateursModel) {
    this.model = model;
  }

  async getAllUtilisateurs(req: Request, res: Response) {
    const response = await this.model.getAll();
    if (!response.success) {
      return res.status(500).json(response);
    }
    res.status(200).json(response);
  }

  async getOneUtilisateur(req: Request, res: Response) {
    const id:number = parseInt(req.params.id);
    const response = await this.model.getOne(id);
    if (!response.success) {
      return res.status(500).json(response);
    }
    res.status(200).json(response);
  }

  async createUtilisateur(req: Request, res:Response) {
    const nom: string = req.body.nom;
    const prenom : string = req.body.prenom;
    const email : string = req.body.email;
    const mot_de_passe : string = req.body.mot_de_passe;
    const role_id : number = req.body.role_id;
    const response = await this.model.create(nom,prenom,email,mot_de_passe,role_id);
    if (!response.success) {
      return res.status(500).json(response);
    }
    if (response.data.insertId && typeof response.data.insertId === "bigint") {
      response.data.insertId = Number(response.data.insertId);
    }
    return res.status(201).json(response);
  }

  async deleteUtilisateur(req: Request, res:Response) {
    const id: number = parseInt(req.params.id);
    const response = await this.model.delete(id);
    if (!response.success) {
      return res.status(500).json(response);
    }
    delete response.data.insertId;
    return res.status(200).json(response);
  }

  async updateUtilisateur(req: Request, res: Response){
    const id:number = parseInt(req.params.id);
    const nom: string = req.body.nom;
    const prenom : string = req.body.prenom;
    const email : string = req.body.email;
    const mot_de_passe : string = req.body.mot_de_passe;
    const role_id : number = req.body.role_id;
    const response = await this.model.update(id,nom,prenom,email,mot_de_passe,role_id);
    if (!response.success) {
      return res.status(500).json(response);
    }
    delete response.data.insertId;
    return res.status(200).json(response);
  }
}
