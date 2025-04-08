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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateursModel = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class UtilisateursModel {
    constructor(database) {
        this.database = database;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("SELECT * FROM Utilisateurs");
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("SELECT * FROM Utilisateurs WHERE id = ?", [id]);
        });
    }
    create(nom, prenom, email, mot_de_passe, role_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const saltRounds = 10;
            const salt = yield bcrypt_1.default.genSalt(saltRounds);
            const hashedPassword = yield bcrypt_1.default.hash(mot_de_passe, salt);
            return this.database.executeQuery("INSERT INTO Utilisateurs (nom,prenom,email,mot_de_passe,role_id) VALUES (?,?,?,?,?)", [nom, prenom, email, hashedPassword, role_id]);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("DELETE FROM Utilisateurs WHERE Utilisateurs.id = ?", [id]);
        });
    }
    update(id, nom, prenom, email, mot_de_passe, role_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.database.executeQuery("UPDATE Utilisateurs SET nom = ?,prenom = ?, email = ?,mot_de_passe = ?,role_id = ?, date_modification = NOW() WHERE Utilisateurs.id = ?", [nom, prenom, email, mot_de_passe, role_id, id]);
        });
    }
}
exports.UtilisateursModel = UtilisateursModel;
