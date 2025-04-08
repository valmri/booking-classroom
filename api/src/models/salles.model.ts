import { DataBase } from "./database";

export class SallesModel {
    private database: DataBase;

    constructor(database: DataBase) {
      this.database = database;
    }

    async getAll(){
      return this.database.executeQuery("SELECT * FROM Salles");
    }

    async getOne(id: number){
      return this.database.executeQuery("SELECT * FROM Salles WHERE id = ?",[id]);
    }

    async create(nom: string,capacite: number){
      return this.database.executeQuery("INSERT INTO Salles (nom, capacite) VALUES (?,?)", [nom, capacite]);
    }

    async update(id: number, nom:string, capacite:number){
      return this.database.executeQuery("UPDATE Salles SET nom = ?,capacite = ?, date_modification = NOW() WHERE Salles.id = ?",
        [nom,capacite,id]);
    }

    async delete(id: number){
      return this.database.executeQuery("DELETE FROM Salles WHERE Salles.id = ?",[id]);
    }
}