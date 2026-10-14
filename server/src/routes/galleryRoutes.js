import express from "express";
import { getGalleryItems, addGalleryItem, deleteGalleryItem, } from "../controllers/galleryController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", getGalleryItems);
router.post("/", protect, adminOnly, upload.single("image"), addGalleryItem);
router.delete("/:id", protect, adminOnly, deleteGalleryItem);

export default router;
