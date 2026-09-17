import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';

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

export default app;