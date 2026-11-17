import { streamPortfolioResponse } from "../../lib/aiService.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { message, history = [] } = req.body;

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

    if (trimmedMessage.length > 300) {
      return res.status(400).json({
        success: false,
        message: "Message is too long. Please keep it under 300 characters.",
      });
    }

    if (!Array.isArray(history)) {
      return res.status(400).json({
        success: false,
        message: "Invalid conversation history.",
      });
    }

    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders?.();

    await streamPortfolioResponse(
      trimmedMessage,
      history,
      (chunk) => {
        res.write(`data: ${JSON.stringify({ text: chunk })}\n\n`);
      }
    );

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    console.error("Chat API Error:", error);

    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: "Sorry, I'm unable to respond right now. Please try again later.",
      });
    }

    res.write(
      `data: ${JSON.stringify({
        error: "The AI response was interrupted. Please try again.",
      })}\n\n`
    );
    res.write("data: [DONE]\n\n");
    res.end();
  }
}
