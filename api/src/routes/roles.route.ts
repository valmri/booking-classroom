import { Router } from "express";
import { RolesController } from "../controllers/roles.controlller";
import { Request, Response } from "express";

export const RolesRoute = (controller: RolesController) => {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    controller.getAllRoles(req, res);
  });

  router.get("/:id", (req: Request, res: Response) => {
    controller.getOneRole(req, res);
  });

  router.post("/", (req: Request, res: Response) => {
    controller.createRole(req, res);
  });

  router.put("/", (req: Request, res: Response) => {
    controller.updateRole(req, res);
  });

  router.delete("/:id", (req: Request, res: Response) => {
    controller.deleteRole(req, res);
  });
  return router;
};
