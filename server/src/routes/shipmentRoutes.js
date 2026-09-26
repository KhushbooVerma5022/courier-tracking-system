import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";
import { createShipment, getMyShipments, getAllShipments, getShipmentById, updateShipment, deleteShipment } from "../controllers/shipmentController.js";

const router = express.Router();

router.post('/', protect, createShipment);
router.get('/my', protect, getMyShipments);
router.get('/', protect, adminOnly, getAllShipments);
router.get('/:id', protect, getShipmentById);
router.put('/:id', protect, adminOnly, updateShipment);
router.delete('/:id', protect, adminOnly, deleteShipment)

export default router;