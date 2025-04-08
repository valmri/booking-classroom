const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
import { crypt } from "../services/bcrypt";

router.post("/login", (req: any, res: any) => {
	// Récupération des paramètres POST (username et password)
	const { email, password } = req.body;

    const emailTest = "aa";
    const cryptPassword = crypt(password)
	if (password === "toto") {
		// Encodage du JWT via la variable d'environnement JWT_SECRET
		const jwtToken = jwt.sign({ email }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});
		res.json(jwtToken);
	} else {
		res.status(401).json({ message: "Authentification échouée." });
	}
});

module.exports = router;
