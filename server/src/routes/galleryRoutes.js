import express from "express";
import { getGalleryItems, addGalleryItem, deleteGalleryItem, } from "../controllers/galleryController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", getGalleryItems);
router.post("/", protect, adminOnly, addGalleryItem);
router.delete("/:id", protect, adminOnly, deleteGalleryItem);

export default router;
