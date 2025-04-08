"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateursRoute = void 0;
const express_1 = require("express");
const UtilisateursRoute = (controller) => {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => {
        controller.getAllUtilisateurs(req, res);
    });
    router.get("/:id", (req, res) => {
        controller.getOneUtilisateur(req, res);
    });
    router.post("/", (req, res) => {
        controller.createUtilisateur(req, res);
    });
    router.delete("/:id", (req, res) => {
        controller.deleteUtilisateur(req, res);
    });
    router.put("/:id", (req, res) => {
        controller.updateUtilisateur(req, res);
    });
    return router;
};
exports.UtilisateursRoute = UtilisateursRoute;
