import { SallesModel } from "../models/salles.model"
import { Request, Response } from "express";

export class SallesController {
    private model: SallesModel;
    
    constructor(model: SallesModel) {
      this.model = model;
    }

    async getAllSalles(req: Request, res: Response){
      const response = await this.model.getAll();
      if (!response.success) {
        return res.status(500).json(response);
      }
      res.status(200).json(response);
    }
    
    async getOneSalle(req: Request, res: Response){
      const id: number = parseInt(req.params.id);
      const response = await this.model.getOne(id)
      if (!response.success) {
        return res.status(500).json(response);
      }
      res.status(200).json(response);
    }
    

    async createSalle(req: Request, res: Response){
      const nom: string = req.body.nom;
      const capacite : number = req.body.capacite;
      const response = await this.model.create(nom,capacite);
      if (!response.success) {
        return res.status(500).json(response);
      }
      if (response.data.insertId && typeof response.data.insertId === "bigint") {
        response.data.insertId = Number(response.data.insertId);
      }
      return res.status(201).json(response);
    }

    async updateSalle(req:Request, res:  Response){
      const id: number = parseInt(req.params.id);
      const nom: string = req.body.nom;
      const capacite : number = req.body.capacite;
      const response = await this.model.update(id,nom,capacite)
      if (!response.success) {
        return res.status(500).json(response);
      }
      delete response.data.insertId;
      return res.status(200).json(response);
    }

    async deleteSalle(req:Request, res:Response){
      const id:number = parseInt(req.params.id);
      const response = await this.model.delete(id);
      if (!response.success) {
        return res.status(500).json(response);
      }
      delete response.data.insertId;
      return res.status(200).json(response);
    }
}