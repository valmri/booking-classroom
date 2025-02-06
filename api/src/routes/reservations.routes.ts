import { Router } from "express";
import { ReservationsController } from "../controllers/reservations.controller";
import { Request, Response } from "express";

export const ReservationsRoute = (controller: ReservationsController) => {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    controller.getAllReversation(req, res);
  });

  router.get("/:id", (req: Request, res: Response) => {
    controller.getOneReversation(req, res);
  });

  router.post("/", (req: Request, res: Response) => {
    controller.createReversation(req, res);
  });

  router.put("/", (req: Request, res: Response) => {
    controller.updateReversation(req, res);
  });

  router.delete("/:id", (req: Request, res: Response) => {
    controller.deleteReversation(req, res);
  });
  return router;
};
