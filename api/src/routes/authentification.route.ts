import { Router } from "express";
import { AuthentificationController } from "../controllers/authentification.controller";
import { Request, Response } from "express";

export const AuthentificationRoute = (
  controller: AuthentificationController
) => {
  const router = Router();

  router.post("/signup", (req: Request, res: Response) => {
    controller.signup(req, res);
  });

  router.post("/login", (req: Request, res: Response) => {
    controller.login(req, res);
  });
  return router;
};
