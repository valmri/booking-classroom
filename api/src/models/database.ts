import mariadb from "mariadb";
import Config from "../config";

export class DataBase {
  private pool: mariadb.Pool;

  constructor() {
    this.pool = mariadb.createPool({
      host: Config.DB_HOST,
      user: Config.DB_USER,
      password: Config.DB_PASSWORD,
      database: Config.DB_DATABASE,
      connectionLimit: 5,
    });
  }

  async closePool() {
    await this.pool.end();
  }

  async executeQuery(query: string, params: any[] = []) {
    let connection;
    try {
      connection = await this.pool.getConnection();
      return await connection.query(query, params);
    } catch (error) {
      console.error("Erreur lors de l'execution de la requete :", error);
      throw error;
    } finally {
      if (connection) connection.release();
    }
  }
}
