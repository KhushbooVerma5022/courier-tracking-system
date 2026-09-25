import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import shipmentRoutes from './routes/shipmentRoutes.js'

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

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/shipments", shipmentRoutes);

export default app;