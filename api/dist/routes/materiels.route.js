"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterielsRoute = void 0;
const express_1 = require("express");
const MaterielsRoute = (controller) => {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => {
        controller.getAllMateriels(req, res);
    });
    router.get("/:id", (req, res) => {
        controller.getOneMateriel(req, res);
    });
    router.post("/", (req, res) => {
        controller.createMateriel(req, res);
    });
    router.put("/", (req, res) => {
        controller.updateMateriel(req, res);
    });
    router.delete("/:id", (req, res) => {
        controller.deleteMateriel(req, res);
    });
    return router;
};
exports.MaterielsRoute = MaterielsRoute;
