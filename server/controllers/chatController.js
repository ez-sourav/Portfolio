import { generatePortfolioResponse } from "../services/aiService.js";

export const chatController = async (req, res) => {
    try {
        const { message, history = [] } = req.body;

        // Validate message
        if (!message || typeof message !== "string") {
            return res.status(400).json({
                success: false,
                message: "A valid message is required.",
            });
        }

        const trimmedMessage = message.trim();

        if (!trimmedMessage) {
            return res.status(400).json({
                success: false,
                message: "Message cannot be empty.",
            });
        }

        // Prevent unnecessarily large requests
        if (trimmedMessage.length > 1000) {
            return res.status(400).json({
                success: false,
                message: "Message is too long. Please keep it under 1000 characters.",
            });
        }

        // Validate conversation history
        if (!Array.isArray(history)) {
            return res.status(400).json({
                success: false,
                message: "Invalid conversation history.",
            });
        }

        // Generate AI response
        const reply = await generatePortfolioResponse(
            trimmedMessage,
            history
        );

        return res.status(200).json({
            success: true,
            reply,
        });
    } catch (error) {
        console.error("Chat Controller Error:", error);

        return res.status(500).json({
            success: false,
            message:
                "Sorry, I'm unable to respond right now. Please try again later.",
        });
    }
};