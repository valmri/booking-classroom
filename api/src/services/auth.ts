import jwt from "jsonwebtoken";
import Config from "../config";

export function auth(req : any, res: any, next: any) {
    const config = Config

    const authHeader = req.headers["authorization"];
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Non autorisé" });
    }

    const token = authHeader.split(" ")[1];
    if(config.JWT_SECRET != undefined){
        try {
            const decoded = jwt.verify(token,config.JWT_SECRET);
            (req as any).user = decoded;
        }
        catch (err) {
            return res.status(401).json({ message: "Token non valide" });
        }        
    }
    next();
  }