import { DataBase } from "./database";

export class MaterielsModel {
  private database: DataBase;

  constructor(database: DataBase) {
    this.database = database;
  }

  async getAll() {
    return this.database.executeQuery("SELECT * FROM Materiels");
  }

  async getOne(id: number) {
    return this.database.executeQuery("SELECT * FROM Materiels WHERE id = ?", [
      id,
    ]);
  }

  async create(nom: string) {
    return this.database.executeQuery(
      "INSERT INTO Materiels (nom) VALUES (?)",
      [nom]
    );
  }

  async update(nom: string, id: number) {
    return this.database.executeQuery(
      "UPDATE Materiels SET nom = ?, date_modification = NOW() WHERE id = ?",
      [nom, id]
    );
  }

  async delete(id: number) {
    return this.database.executeQuery("DELETE FROM Materiels WHERE id = ?", [
      id,
    ]);
  }
}
