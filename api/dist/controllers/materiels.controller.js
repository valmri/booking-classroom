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
exports.MaterielsController = void 0;
class MaterielsController {
    constructor(model) {
        this.model = model;
    }
    getAllMateriels(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.model.getAll();
            if (!response.success) {
                return res.status(500).json(response);
            }
            return res.status(200).json(response);
        });
    }
    getOneMateriel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const response = yield this.model.getOne(id);
            if (!response.success) {
                return res.status(500).json(response);
            }
            return res.status(200).json(response);
        });
    }
    createMateriel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nom = req.body.nom;
            const response = yield this.model.create(nom);
            if (!response.success) {
                return res.status(500).json(response);
            }
            if (response.data.insertId && typeof response.data.insertId === "bigint") {
                response.data.insertId = Number(response.data.insertId);
            }
            return res.status(201).json(response);
        });
    }
    updateMateriel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nom = req.body.nom;
            const id = req.body.id;
            const response = yield this.model.update(nom, id);
            if (!response.success) {
                return res.status(500).json(response);
            }
            delete response.data.insertId;
            return res.status(200).json(response);
        });
    }
    deleteMateriel(req, res) {
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
exports.MaterielsController = MaterielsController;
