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
import { ReversationsModel } from "./models/reservations.model";
import { ReservationsController } from "./controllers/reservations.controller";
import { ReservationsRoute } from "./routes/reservations.routes";
import { RolesModel } from "./models/roles.model";
import { RolesController } from "./controllers/roles.controlller";
import { RolesRoute } from "./routes/roles.route";
import { SallesModel } from "./models/salles.model";
import { SallesController } from "./controllers/salles.controller";
import { SallesRoute } from "./routes/salles.route";
import { AuthentificationController } from "./controllers/authentification.controller";
import { AuthentificationRoute } from "./routes/authentification.route";

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
const utilisateursController: UtilisateursController =
  new UtilisateursController(utilisateursModel);
app.use("/utilisateurs", UtilisateursRoute(utilisateursController));

const materielsModel: MaterielsModel = new MaterielsModel(database);
const materielsController: MaterielsController = new MaterielsController(materielsModel);
app.use("/materiels",Auth, MaterielsRoute(materielsController));

const reservationsModel: ReversationsModel = new ReversationsModel(database);
const reservationsController: ReservationsController = new ReservationsController(reservationsModel);
app.use("/reservations", ReservationsRoute(reservationsController));

const rolesModel: RolesModel = new RolesModel(database);
const rolesController: RolesController = new RolesController(rolesModel);
app.use("/roles",Auth, RolesRoute(rolesController));

const sallesModel: SallesModel = new SallesModel(database);
const sallesController: SallesController = new SallesController(sallesModel);
app.use("/salles",Auth, SallesRoute(sallesController));

// Authentification
const authentificationController: AuthentificationController =
  new AuthentificationController(utilisateursModel, Config);
app.use("/auth", AuthentificationRoute(authentificationController));

app.listen(Config.PORT_API, () => {
  console.log(`Server is running on ${Config.BASE_URL}`);
});
