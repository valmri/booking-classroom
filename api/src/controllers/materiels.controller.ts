import { MaterielsModel } from "../models/materiels.model";
import { Request, Response } from "express";

export class MaterielsController {
  private model: MaterielsModel;

  constructor(model: MaterielsModel) {
    this.model = model;
  }

  async getAllMateriels(req: Request, res: Response) {
    let response = await this.model.getAll();
    res.json(response);
  }

  async getOneMateriel(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const response = await this.model.getOne(id);
    res.json(response);
  }
}
