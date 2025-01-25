import NotificationController from "../controllers/notificationController.js";
import { Router } from "express";

const router = Router();

// GET
router.get('/allInfringement', NotificationController.index); // To show all plates
router.post('/allInfringement/ID/:autoDaInfracao', NotificationController.showById) // Find by the ID, in us case it´s called autoDaInfracao
router.post('/allInfringement/:placa', NotificationController.showByPlate); // To search with a plate and show the all infractions of that plate
routes.post('/allInfringement/SPEEDFILTER', NotificationController.filterBySpeed); // Filter to find by the speed range
// POST
router.post('/allInfringement', NotificationController.store); // Create new infractions
// PATCH
router.patch('/allInfringement/PATCH/:autoDaInfracao', NotificationController.update); // Update fields
// DELETE
router.delete('/allInfringement/DELETE/:autoDaInfracao', NotificationController.delete); // Delete a infringement from the database

export default router;