import { Router } from "express";
import NotificationController from "../controllers/notificationController.js";

const router = Router();

router.get('/allInfringement', NotificationController.index);

export default router;