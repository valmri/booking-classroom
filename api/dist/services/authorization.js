"use strict";
// Première étape : Récupération du jwtToken puis vérification du jwtToken
// Seconde étape : Récupération du role_id de l'utilisateur
// Troisième étape : Récupération de la route voulue par l'utilisasteur
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = authorization;
// Quatrième étape : Vérifiquation de la possibilité d'utilisé la route.
const jwt = require("jsonwebtoken");
function authorization(req, res, next) {
    const authHeader = req.hearders["authorization"];
    const id = parseInt(req.body.id);
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({ message: "Non autorisé" }); // Si pas recu de token
    }
    const token = authHeader.split(" ")[1]; // Récupération du token après "Bearer"
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) {
            return res.status(401).json({ message: "Non autorisé" });
        }
        next();
    });
}
