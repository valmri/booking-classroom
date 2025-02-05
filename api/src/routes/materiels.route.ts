import { Router } from "express";
import { MaterielsController } from "../controllers/materiels.controller";

export const MaterielsRoute = (controller: MaterielsController) => {
  const router = Router();

  router.get("/", (req, res) => {
    controller.getAllMateriels(req, res);
  });

  router.get("/:id", (req, res) => {
    controller.getOneMateriel(req, res);
  });
  return router;
};
