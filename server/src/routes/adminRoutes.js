import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { adminOnly } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.get("/test", protect, adminOnly, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Admin access granted",
    });
})

export default router;