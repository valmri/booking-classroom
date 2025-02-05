import express from "express";
import cors from "cors";
import Config from "./config";
import { DataBase } from "./models/database";
import { UtilisateursModel } from "./models/utilisateurs.model";
import { UtilisateursController } from "./controllers/utilisateurs.controller";
import { UtilisateursRoute } from "./routes/utilisateurs.route";

const app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const database = new DataBase();
const utilisateursModel = new UtilisateursModel(database);
const utilisateursController = new UtilisateursController(utilisateursModel);
app.use("/utilisateurs", UtilisateursRoute(utilisateursController));

// Middlewares

app.listen(Config.PORT_API, () => {
  console.log(`Server is running on ${Config.BASE_URL}`);
});
