import express from "express";
import "dotenv/config";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();

const allowedOrigins = [
    "http://localhost:5173",
    "https://sourav04.vercel.app",
    "https://www.souravbiswas.in",
];

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