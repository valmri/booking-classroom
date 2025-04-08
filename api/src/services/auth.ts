import jwt from "jsonwebtoken";
import Config from "../config";

function auth(req : any, res: any, next: any) {
    let config = Config

    const authHeader = req.headers["authorization"];
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Non autorisé" });
    }
  
    const token = authHeader.split(" ")[1];
  
    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Token invalide" });
      }
  
      // On attache les infos décodées à la requête
      req.user = decoded;
  
      next();
    });
  }
  
  module.exports = auth;