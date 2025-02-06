import { Router } from "express";
import { MaterielsController } from "../controllers/materiels.controller";
import { Request, Response } from "express";

export const MaterielsRoute = (controller: MaterielsController) => {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    controller.getAllMateriels(req, res);
  });

  router.get("/:id", (req: Request, res: Response) => {
    controller.getOneMateriel(req, res);
  });

  router.post("/", (req: Request, res: Response) => {
    controller.createMateriel(req, res);
  });

  router.put("/", (req: Request, res: Response) => {
    controller.updateMateriel(req, res);
  });

  router.delete("/:id", (req: Request, res: Response) => {
    controller.deleteMateriel(req, res);
  });
  return router;
};
