import express from "express";
import "dotenv/config";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();

const allowedOrigins = [
    process.env.FRONTEND_URL,
    "https://sourav04.vercel.app",
    "https://www.souravbiswas.in",
].filter(Boolean);

app.use(
    cors({
        origin: allowedOrigins,
        methods: ["GET", "POST", "OPTIONS"],
        allowedHeaders: ["Content-Type"],
    })
);

app.use(express.json());

app.use("/api", chatRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Portfolio AI Chatbot Server is running",
    });
});

export default app;