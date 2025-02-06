import { Router } from "express";
import { SallesController } from "../controllers/salles.controller";
import { Request, Response } from "express";

export const SallesRoute = (controller: SallesController) => {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {  
    controller.getAllSalles(req, res);
  });

  router.get("/:id",(req:  Request,res: Response) => {
    controller.getOneSalle(req,res);
  })

  router.post("/",(req: Request,res: Response) => {
    controller.createSalle(req,res);
  })

  router.put("/:id",(req: Request,res: Response) => {
    controller.updateSalle(req,res);
  })

  router.delete("/:id",(req: Request,res: Response) => {
    controller.deleteSalle(req,res);
  })

  return router;
};
