import { streamPortfolioResponse } from "../services/aiService.js";

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
        if (trimmedMessage.length > 300) {
            return res.status(400).json({
                success: false,
                message:
                    "Message is too long. Please keep it under 300 characters.",
            });
        }

        // Validate conversation history
        if (!Array.isArray(history)) {
            return res.status(400).json({
                success: false,
                message: "Invalid conversation history.",
            });
        }

        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache, no-transform");
        res.setHeader("Connection", "keep-alive");

        res.flushHeaders?.();

       
        await streamPortfolioResponse(
            trimmedMessage,
            history,
            (chunk) => {
                res.write(
                    `data: ${JSON.stringify({
                        text: chunk,
                    })}\n\n`
                );
            }
        );

        // Tell frontend that generation is complete
        res.write("data: [DONE]\n\n");

        res.end();
    } catch (error) {
        console.error("Chat Controller Error:", error);

       
        if (!res.headersSent) {
            return res.status(500).json({
                success: false,
                message:
                    "Sorry, I'm unable to respond right now. Please try again later.",
            });
        }

        res.write(
            `data: ${JSON.stringify({
                error:
                    "The AI response was interrupted. Please try again.",
            })}\n\n`
        );

        res.write("data: [DONE]\n\n");

        res.end();
    }
};