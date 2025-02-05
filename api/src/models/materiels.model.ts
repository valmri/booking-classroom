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
}
