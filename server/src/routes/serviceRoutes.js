import express from "express";
import { getActiveServices, getAllServices, createService, updateService, updateServiceStatus, deleteService, } from "../controllers/serviceController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", getActiveServices);
router.get("/admin", protect, adminOnly, getAllServices);
router.post("/", protect, adminOnly, createService);
router.put("/:id", protect, adminOnly, updateService);
router.patch("/:id/status", protect, adminOnly, updateServiceStatus);
router.delete("/:id", protect, adminOnly, deleteService);

export default router;