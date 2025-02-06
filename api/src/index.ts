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

const materielsModel = new MaterielsModel(database);
const materielsController = new MaterielsController(materielsModel);
app.use("/materiels", MaterielsRoute(materielsController));

const reservationsModel: ReversationsModel = new ReversationsModel(database);
const reservationsController: ReservationsController =
  new ReservationsController(reservationsModel);
app.use("/reservations", ReservationsRoute(reservationsController));

const rolesModel: RolesModel = new RolesModel(database);
const rolesController: RolesController = new RolesController(rolesModel);
app.use("/roles", RolesRoute(rolesController));

app.listen(Config.PORT_API, () => {
  console.log(`Server is running on ${Config.BASE_URL}`);
});
