import { ReversationsModel } from "../models/reservations.model";
import { Request, Response } from "express";

export class ReservationsController {
  private model: ReversationsModel;

  constructor(model: ReversationsModel) {
    this.model = model;
  }

  async getAllReversation(req: Request, res: Response) {
    let response = await this.model.getAll();
    if (!response.success) {
      return res.status(500).json(response);
    }
    return res.status(200).json(response);
  }

  async getOneReversation(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    const response = await this.model.getOne(id);
    if (!response.success) {
      return res.status(500).json(response);
    }
    return res.status(200).json(response);
  }

  async createReversation(req: Request, res: Response) {
    const salle_id: number = parseInt(req.body.salle_id);
    const utilisateur_id: number = parseInt(req.body.utilisateur_id);
    const date_debut: Date = req.body.date_debut;
    const date_fin: Date = req.body.date_fin;

    const response = await this.model.create(
      salle_id,
      utilisateur_id,
      date_debut,
      date_fin
    );
    if (!response.success) {
      return res.status(500).json(response);
    }
    if (response.data.insertId && typeof response.data.insertId === "bigint") {
      response.data.insertId = Number(response.data.insertId);
    }
    return res.status(201).json(response);
  }

  async updateReversation(req: Request, res: Response) {
    const date_debut: Date = req.body.date_debut;
    const date_fin: Date = req.body.date_fin;
    const id: number = parseInt(req.body.id);

    const response = await this.model.update(date_debut, date_fin, id);
    if (!response.success) {
      return res.status(500).json(response);
    }

    delete response.data.insertId;

    return res.status(200).json(response);
  }

  async deleteReversation(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    const response = await this.model.delete(id);
    if (!response.success) {
      return res.status(500).json(response);
    }

    delete response.data.insertId;

    return res.status(200).json(response);
  }
}
