import { DataBase } from "./database";

export class UtilisateursModel {
  private database: DataBase;

  constructor(database: DataBase) {
    this.database = database;
  }

  async getAll() {
    return this.database.executeQuery("SELECT * FROM Utilisateurs");
  }
}
