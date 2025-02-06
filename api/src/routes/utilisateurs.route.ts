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

  router.delete("/:id",(req,res) => {
    controller.deleteUtilisateur(req,res);
  })

  router.put("/:id",(req,res) => {
    controller.updateUtilisateur(req,res);
  })

  return router;
};
