import express from "express";
import { getTrackingByNumber, addTrackingUpdate } from "../controllers/trackingController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js"

const router = express.Router();

router.get("/:trackingNumber", getTrackingByNumber);
router.post("/", protect, adminOnly, addTrackingUpdate);

export default router;