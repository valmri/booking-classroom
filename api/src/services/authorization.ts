// Première étape : Récupération du jwtToken puis vérification du jwtToken
// Seconde étape : Récupération du role_id de l'utilisateur
// Troisième étape : Récupération de la route voulue par l'utilisasteur

import { NextFunction } from "express";

// Quatrième étape : Vérifiquation de la possibilité d'utilisé la route.
const jwt = require("jsonwebtoken");

export function authorization(req:any,res:any,next:any){

  const authHeader:string = req.hearders["authorization"];
  console.log(authHeader);
  
  const id:number = parseInt(req.body.id);


  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Non autorisé" }); // Si pas recu de token
  }

  const token = authHeader.split(" ")[1]; // Récupération du token après "Bearer"

  jwt.verify(token, process.env.JWT_SECRET, (err:any) => {  // Test de la clef secrète 
    if (err) {
      return res.status(401).json({ message: "Non autorisé" });
    }
    next();
  })
}