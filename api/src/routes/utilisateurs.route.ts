import { Router } from "express";
import { UtilisateursController } from "../controllers/utilisateurs.controller";

export const UtilisateursRoute = (controller: UtilisateursController) => {
  const router = Router();

  router.get("/", (req, res) => {
    controller.getAllUtilisateurs(req, res);
  });

  router.get("/:id",(req,res) => {
    controller.getOneUtilisateur(req,res);
  })

  router.post("/",(req,res) => {
    controller.createUtilisateur(req,res);
  })

  return router;
};
