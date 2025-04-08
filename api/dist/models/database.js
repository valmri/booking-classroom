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
exports.DataBase = void 0;
const mariadb_1 = __importDefault(require("mariadb"));
const config_1 = __importDefault(require("../config"));
class DataBase {
    constructor() {
        this.pool = mariadb_1.default.createPool({
            host: config_1.default.DB_HOST,
            user: config_1.default.DB_USER,
            password: config_1.default.DB_PASSWORD,
            database: config_1.default.DB_DATABASE,
            connectionLimit: 5,
        });
    }
    closePool() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pool.end();
        });
    }
    executeQuery(query_1) {
        return __awaiter(this, arguments, void 0, function* (query, params = []) {
            let connection;
            try {
                connection = yield this.pool.getConnection();
                const rows = yield connection.query(query, params);
                return { success: true, data: rows };
            }
            catch (error) {
                console.error("Erreur SQL :", error);
                return {
                    success: false,
                    error: "Erreur lors de l'exécution de la requête.",
                };
            }
            finally {
                if (connection) {
                    try {
                        connection.release();
                    }
                    catch (releaseError) {
                        console.error("Erreur lors de la libération de la connexion :", releaseError);
                    }
                }
            }
        });
    }
}
exports.DataBase = DataBase;
