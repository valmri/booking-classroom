"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SallesRoute = void 0;
const express_1 = require("express");
const SallesRoute = (controller) => {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => {
        controller.getAllSalles(req, res);
    });
    router.get("/:id", (req, res) => {
        controller.getOneSalle(req, res);
    });
    router.post("/", (req, res) => {
        controller.createSalle(req, res);
    });
    router.put("/:id", (req, res) => {
        controller.updateSalle(req, res);
    });
    router.delete("/:id", (req, res) => {
        controller.deleteSalle(req, res);
    });
    return router;
};
exports.SallesRoute = SallesRoute;
