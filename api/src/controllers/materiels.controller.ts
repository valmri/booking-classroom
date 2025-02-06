import { MaterielsModel } from "../models/materiels.model";
import { Request, Response } from "express";

export class MaterielsController {
  private model: MaterielsModel;

  constructor(model: MaterielsModel) {
    this.model = model;
  }

  async getAllMateriels(req: Request, res: Response) {
    let response = await this.model.getAll();
    if (!response.success) {
      return res.status(500).json(response);
    }
    return res.status(200).json(response);
  }

  async getOneMateriel(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const response = await this.model.getOne(id);
    if (!response.success) {
      return res.status(500).json(response);
    }
    return res.status(200).json(response);
  }

  async createMateriel(req: Request, res: Response) {
    const nom: string = req.body.nom;
    const response = await this.model.create(nom);
    if (!response.success) {
      return res.status(500).json(response);
    }
    console.log(
      "debugCreate",
      response.data.insertId && typeof response.data.insertId === "bigint"
    );
    if (response.data.insertId && typeof response.data.insertId === "bigint") {
      response.data.insertId = Number(response.data.insertId);
    }
    return res.status(201).json(response);
  }

  async updateMateriel(req: Request, res: Response) {
    const nom: string = req.body.nom;
    const id: number = req.body.id;

    const response = await this.model.update(nom, id);
    if (!response.success) {
      return res.status(500).json(response);
    }

    delete response.data.insertId;

    return res.status(200).json(response);
  }

  async deleteMateriel(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    const response = await this.model.delete(id);
    if (!response.success) {
      return res.status(500).json(response);
    }

    delete response.data.insertId;

    return res.status(200).json(response);
  }
}
