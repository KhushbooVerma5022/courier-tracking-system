import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createShipment } from "../controllers/shipmentController.js";

const router = express.Router();

router.post('/',protect, createShipment);

export default router;