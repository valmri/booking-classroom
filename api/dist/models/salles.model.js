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
exports.SallesModel = void 0;
class SallesModel {
    constructor(database) {
        this.database = database;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("SELECT * FROM Salles");
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("SELECT * FROM Salles WHERE id = ?", [id]);
        });
    }
    create(nom, capacite) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("INSERT INTO Salles (nom, capacite) VALUES (?,?)", [nom, capacite]);
        });
    }
    update(id, nom, capacite) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("UPDATE Salles SET nom = ?,capacite = ?, date_modification = NOW() WHERE Salles.id = ?", [nom, capacite, id]);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("DELETE FROM Salles WHERE Salles.id = ?", [id]);
        });
    }
}
exports.SallesModel = SallesModel;
