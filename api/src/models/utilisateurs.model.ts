import { DataBase } from "./database";
import { crypt } from "../services/bcrypt";
export class UtilisateursModel {
  private database: DataBase;

  constructor(database: DataBase) {
    this.database = database;
  }

  async getAll() {
    return this.database.executeQuery("SELECT * FROM Utilisateurs");
  }

  async getOne(id: number) {
    return this.database.executeQuery(
      "SELECT * FROM Utilisateurs WHERE id = ?",
      [id]
    );
  }

  async create(
    nom: string,
    prenom: string,
    email: string,
    mot_de_passe: string,
    role_id: number
  ) {
    const saltRounds: number = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(mot_de_passe, salt);
    return this.database.executeQuery(
      "INSERT INTO Utilisateurs (nom,prenom,email,mot_de_passe,role_id) VALUES (?,?,?,?,?) RETURNING nom, prenom, email, role_id",
      [nom, prenom, email, hashedPassword, role_id]
    );
  }

  async delete(id: number) {
    return this.database.executeQuery(
      "DELETE FROM Utilisateurs WHERE Utilisateurs.id = ?",
      [id]
    );
  }

  async update(
    id: number,
    nom: string,
    prenom: string,
    email: string,
    mot_de_passe: string,
    role_id: number
  ) {
    return this.database.executeQuery(
      "UPDATE Utilisateurs SET nom = ?,prenom = ?, email = ?,mot_de_passe = ?,role_id = ?, date_modification = NOW() WHERE Utilisateurs.id = ?",
      [nom, prenom, email, mot_de_passe, role_id, id]
    );
  }

  async getOneByEmail(email: string) {
    return this.database.executeQuery(
      "SELECT * FROM Utilisateurs WHERE email = ?",
      [email]
    );
  }
}
