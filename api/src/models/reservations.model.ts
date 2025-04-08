import { DataBase } from "./database";

export class ReversationsModel {
  private database: DataBase;

  constructor(database: DataBase) {
    this.database = database;
  }

  async getAll() {
    return this.database.executeQuery("SELECT * FROM Reservations");
  }

  async getOne(id: number) {
    return this.database.executeQuery(
      "SELECT * FROM Reservations WHERE id = ?",
      [id]
    );
  }

  async create(
    salle_id: number,
    utilisateur_id: number,
    date_debut: Date,
    date_fin: Date
  ) {
    return this.database.executeQuery(
      "INSERT INTO Reservations (salle_id, utilisateur_id, date_debut, date_fin) VALUES (?, ?, ?, ?)",
      [salle_id, utilisateur_id, date_debut, date_fin]
    );
  }

  async update(date_debut: Date, date_fin: Date, id: number) {
    return this.database.executeQuery(
      "UPDATE Reservations SET date_debut = ?, date_fin = ?, date_modification = NOW() WHERE id = ?",
      [date_debut, date_fin, id]
    );
  }

  async delete(id: number) {
    return this.database.executeQuery("DELETE FROM Reservations WHERE id = ?", [
      id,
    ]);
  }
}
