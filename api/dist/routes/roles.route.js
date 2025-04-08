"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesRoute = void 0;
const express_1 = require("express");
const RolesRoute = (controller) => {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => {
        controller.getAllRoles(req, res);
    });
    router.get("/:id", (req, res) => {
        controller.getOneRole(req, res);
    });
    router.post("/", (req, res) => {
        controller.createRole(req, res);
    });
    router.put("/", (req, res) => {
        controller.updateRole(req, res);
    });
    router.delete("/:id", (req, res) => {
        controller.deleteRole(req, res);
    });
    return router;
};
exports.RolesRoute = RolesRoute;
