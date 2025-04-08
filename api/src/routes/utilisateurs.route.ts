import { Router } from "express";
import { UtilisateursController } from "../controllers/utilisateurs.controller";
import { Request, Response } from "express";

export const UtilisateursRoute = (controller: UtilisateursController) => {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    controller.getAllUtilisateurs(req, res);
  });

  router.get("/:id",(req: Request,res: Response) => {
    controller.getOneUtilisateur(req,res);
  })

  router.post("/", (req: Request,res: Response) => {
    controller.createUtilisateur(req,res);
  })

  router.delete("/:id", (req: Request,res: Response) => {
    controller.deleteUtilisateur(req,res);
  })

  router.put("/:id", (req: Request,res: Response) => {
    controller.updateUtilisateur(req,res);
  })

  return router;
};
