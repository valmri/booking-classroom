"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const database_1 = require("./models/database");
const utilisateurs_model_1 = require("./models/utilisateurs.model");
const utilisateurs_controller_1 = require("./controllers/utilisateurs.controller");
const utilisateurs_route_1 = require("./routes/utilisateurs.route");
const materiels_model_1 = require("./models/materiels.model");
const materiels_route_1 = require("./routes/materiels.route");
const materiels_controller_1 = require("./controllers/materiels.controller");
const reservations_model_1 = require("./models/reservations.model");
const reservations_controller_1 = require("./controllers/reservations.controller");
const reservations_routes_1 = require("./routes/reservations.routes");
const roles_model_1 = require("./models/roles.model");
const roles_controlller_1 = require("./controllers/roles.controlller");
const roles_route_1 = require("./routes/roles.route");
const salles_model_1 = require("./models/salles.model");
const salles_controller_1 = require("./controllers/salles.controller");
const salles_route_1 = require("./routes/salles.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.json());
const database = new database_1.DataBase();
const utilisateursModel = new utilisateurs_model_1.UtilisateursModel(database);
const utilisateursController = new utilisateurs_controller_1.UtilisateursController(utilisateursModel);
app.use("/utilisateurs", (0, utilisateurs_route_1.UtilisateursRoute)(utilisateursController));
const materielsModel = new materiels_model_1.MaterielsModel(database);
const materielsController = new materiels_controller_1.MaterielsController(materielsModel);
app.use("/materiels", (0, materiels_route_1.MaterielsRoute)(materielsController));
const reservationsModel = new reservations_model_1.ReversationsModel(database);
const reservationsController = new reservations_controller_1.ReservationsController(reservationsModel);
app.use("/reservations", (0, reservations_routes_1.ReservationsRoute)(reservationsController));
const rolesModel = new roles_model_1.RolesModel(database);
const rolesController = new roles_controlller_1.RolesController(rolesModel);
app.use("/roles", (0, roles_route_1.RolesRoute)(rolesController));
const sallesModel = new salles_model_1.SallesModel(database);
const sallesController = new salles_controller_1.SallesController(sallesModel);
app.use("/salles", (0, salles_route_1.SallesRoute)(sallesController));
app.listen(config_1.default.PORT_API, () => {
    console.log(`Server is running on ${config_1.default.BASE_URL}`);
});
