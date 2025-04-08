"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsRoute = void 0;
const express_1 = require("express");
const ReservationsRoute = (controller) => {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => {
        controller.getAllReversation(req, res);
    });
    router.get("/:id", (req, res) => {
        controller.getOneReversation(req, res);
    });
    router.post("/", (req, res) => {
        controller.createReversation(req, res);
    });
    router.put("/", (req, res) => {
        controller.updateReversation(req, res);
    });
    router.delete("/:id", (req, res) => {
        controller.deleteReversation(req, res);
    });
    return router;
};
exports.ReservationsRoute = ReservationsRoute;
