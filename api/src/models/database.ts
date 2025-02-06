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
      const rows = await connection.query(query, params);
      return { success: true, data: rows };
    } catch (error) {
      console.error("Erreur SQL :", error);
      return {
        success: false,
        error: "Erreur lors de l'exécution de la requête.",
      };
    } finally {
      if (connection) {
        try {
          connection.release();
        } catch (releaseError) {
          console.error(
            "Erreur lors de la libération de la connexion :",
            releaseError
          );
        }
      }
    }
  }
}
