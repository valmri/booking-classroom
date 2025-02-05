import { DataBase } from "./database";

export class UtilisateursModel {
  private database: DataBase;

  constructor(database: DataBase) {
    this.database = database;
  }

  async getAll() {
    return this.database.executeQuery("SELECT * FROM Utilisateurs");
  }

  async getOne(id : number) {
    return this.database.executeQuery("SELECT * FROM Utilisateurs WHERE id = ?",[id]);
  }

  async create(nom: string, prenom: string, email: string, mot_de_passe: string, role_id: number) {
    return this.database.executeQuery("INSERT INTO Utilisateurs VALUES (?,?,?,?,?",
      [nom, prenom, email , mot_de_passe, role_id]);
  }
}
