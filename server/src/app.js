import express from 'express';
import cors from 'cors';
import multer from "multer";
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import shipmentRoutes from './routes/shipmentRoutes.js';
import trackingRoutes from './routes/trackingRoutes.js';
import serviceRoutes from "./routes/serviceRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.get("/api/v1/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is running"
    });
});

app.use("/uploads", express.static(path.resolve("uploads")));
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/shipments", shipmentRoutes);
app.use("/api/v1/tracking", trackingRoutes);
app.use("/api/v1/services", serviceRoutes);
app.use("/api/v1/gallery", galleryRoutes);

app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        return res.status(400).json({
            success: false,
            message:
                error.code === "LIMIT_FILE_SIZE"
                    ? "Image must be 5 MB or smaller"
                    : error.message,
        });
    }

    if (error.message === "Only JPG, PNG and WEBP images are allowed") {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }

    next(error);
});

export default app;