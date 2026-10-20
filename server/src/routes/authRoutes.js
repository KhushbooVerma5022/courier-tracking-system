import express from "express";
import { registerUser, loginUser, getMe, getCustomerCount, getAllUsers } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.get("/customers/count", protect, getCustomerCount);
router.get("/users", protect, getAllUsers);


export default router;