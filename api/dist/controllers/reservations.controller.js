"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsController = void 0;
class ReservationsController {
    constructor(model) {
        this.model = model;
    }
    getAllReversation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.model.getAll();
            if (!response.success) {
                return res.status(500).json(response);
            }
            return res.status(200).json(response);
        });
    }
    getOneReversation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const response = yield this.model.getOne(id);
            if (!response.success) {
                return res.status(500).json(response);
            }
            return res.status(200).json(response);
        });
    }
    createReversation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const salle_id = parseInt(req.body.salle_id);
            const utilisateur_id = parseInt(req.body.utilisateur_id);
            const date_debut = req.body.date_debut;
            const date_fin = req.body.date_fin;
            const response = yield this.model.create(salle_id, utilisateur_id, date_debut, date_fin);
            if (!response.success) {
                return res.status(500).json(response);
            }
            if (response.data.insertId && typeof response.data.insertId === "bigint") {
                response.data.insertId = Number(response.data.insertId);
            }
            return res.status(201).json(response);
        });
    }
    updateReversation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const date_debut = req.body.date_debut;
            const date_fin = req.body.date_fin;
            const id = parseInt(req.body.id);
            const response = yield this.model.update(date_debut, date_fin, id);
            if (!response.success) {
                return res.status(500).json(response);
            }
            delete response.data.insertId;
            return res.status(200).json(response);
        });
    }
    deleteReversation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const response = yield this.model.delete(id);
            if (!response.success) {
                return res.status(500).json(response);
            }
            delete response.data.insertId;
            return res.status(200).json(response);
        });
    }
}
exports.ReservationsController = ReservationsController;
