import { DataBase } from "./database";

export class RolesModel {
  private database: DataBase;

  constructor(database: DataBase) {
    this.database = database;
  }

  async getAll() {
    return this.database.executeQuery("SELECT * FROM Roles");
  }

  async getOne(id: number) {
    return this.database.executeQuery("SELECT * FROM Roles WHERE id = ?", [id]);
  }

  async create(nom: string) {
    return this.database.executeQuery("INSERT INTO Roles (nom) VALUES (?)", [
      nom,
    ]);
  }

  async update(nom: string, id: number) {
    return this.database.executeQuery("UPDATE Roles SET nom = ? WHERE id = ?", [
      nom,
      id,
    ]);
  }

  async delete(id: number) {
    return this.database.executeQuery("DELETE FROM Roles WHERE id = ?", [id]);
  }
}
