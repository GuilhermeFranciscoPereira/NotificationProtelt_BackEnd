import { Router } from "express";
import NotificationController from "../controllers/notificationController.js";

const router = Router();

router.get('/allInfringement', NotificationController.index); // Get All
router.post("/allInfringement/:placa", NotificationController.showByPlate); // Get By Plates
router.post('/allInfringement', NotificationController.store); // Post 

export default router;