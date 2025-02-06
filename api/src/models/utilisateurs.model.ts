import { DataBase } from "./database";
import bcrypt from "bcrypt";


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
    const saltRounds: number = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(mot_de_passe, salt);
    console.log(hashedPassword);
    return this.database.executeQuery("INSERT INTO Utilisateurs (nom,prenom,email,mot_de_passe,role_id) VALUES (?,?,?,?,?)",
      [nom,prenom,email,hashedPassword,role_id]);
    
  }

  

}
