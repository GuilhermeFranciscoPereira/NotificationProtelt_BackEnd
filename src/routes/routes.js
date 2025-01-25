import { Router } from "express";
import NotificationController from "../controllers/notificationController.js";

const router = Router();

// GET
router.get('/allInfringement', NotificationController.index); // To show all plates
router.post("/allInfringement/:placa", NotificationController.showByPlate); // To search with a plate and show the all infractions of that plate
router.post("/allInfringement/ID/:autoDaInfracao", NotificationController.showById) // Find by the ID, in us case it´s called autoDaInfracao
// POST
router.post('/allInfringement', NotificationController.store); // Create new infractions
// PATCH
router.patch('/allInfringement/PATCH/:autoDaInfracao', NotificationController.update); // Update fields

export default router;