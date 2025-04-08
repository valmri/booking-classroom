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
exports.ReversationsModel = void 0;
class ReversationsModel {
    constructor(database) {
        this.database = database;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("SELECT * FROM Reservations");
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("SELECT * FROM Reservations WHERE id = ?", [id]);
        });
    }
    create(salle_id, utilisateur_id, date_debut, date_fin) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("INSERT INTO Reservations (salle_id, utilisateur_id, date_debut, date_fin) VALUES (?, ?, ?, ?)", [salle_id, utilisateur_id, date_debut, date_fin]);
        });
    }
    update(date_debut, date_fin, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("UPDATE Reservations SET date_debut = ?, date_fin = ?, date_modification = NOW() WHERE id = ?", [date_debut, date_fin, id]);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("DELETE FROM Reservations WHERE id = ?", [
                id,
            ]);
        });
    }
}
exports.ReversationsModel = ReversationsModel;
