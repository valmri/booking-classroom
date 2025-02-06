import express from "express";
import cors from "cors";
import Config from "./config";
import { DataBase } from "./models/database";
import { UtilisateursModel } from "./models/utilisateurs.model";
import { UtilisateursController } from "./controllers/utilisateurs.controller";
import { UtilisateursRoute } from "./routes/utilisateurs.route";
import { MaterielsModel } from "./models/materiels.model";
import { MaterielsRoute } from "./routes/materiels.route";
import { MaterielsController } from "./controllers/materiels.controller";
import { SallesModel } from "./models/salles.model";
import { SallesController } from "./controllers/salles.controller";
import { SallesRoute } from "./routes/salles.route";

const app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const database = new DataBase();
const utilisateursModel: UtilisateursModel = new UtilisateursModel(database);
const utilisateursController: UtilisateursController = new UtilisateursController(utilisateursModel);
app.use("/utilisateurs", UtilisateursRoute(utilisateursController));

const materielsModel = new MaterielsModel(database);
const materielsController = new MaterielsController(materielsModel);
app.use("/materiels", MaterielsRoute(materielsController));

const sallesModel:SallesModel = new SallesModel(database);
const sallesController:SallesController = new SallesController(sallesModel);
app.use("/salles", SallesRoute(sallesController));

app.listen(Config.PORT_API, () => {
  console.log(`Server is running on ${Config.BASE_URL}`);
});
