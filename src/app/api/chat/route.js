import { streamPortfolioResponse } from "../../../lib/aiService.js";

export const dynamic = "force-dynamic";

export async function POST(req) {
    try {
        const body = await req.json();
        const { message, history = [] } = body;

        if (!message || typeof message !== "string") {
            return Response.json(
                { success: false, message: "A valid message is required." },
                { status: 400 }
            );
        }

        const trimmedMessage = message.trim();

        if (!trimmedMessage) {
            return Response.json(
                { success: false, message: "Message cannot be empty." },
                { status: 400 }
            );
        }

        if (trimmedMessage.length > 300) {
            return Response.json(
                {
                    success: false,
                    message: "Message is too long. Please keep it under 300 characters.",
                },
                { status: 400 }
            );
        }

        if (!Array.isArray(history)) {
            return Response.json(
                { success: false, message: "Invalid conversation history." },
                { status: 400 }
            );
        }

        const encoder = new TextEncoder();

        const stream = new ReadableStream({
            async start(controller) {
                try {
                    await streamPortfolioResponse(
                        trimmedMessage,
                        history,
                        (chunk) => {
                            controller.enqueue(
                                encoder.encode(
                                    `data: ${JSON.stringify({ text: chunk })}\n\n`
                                )
                            );
                        }
                    );

                    controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                    controller.close();
                } catch (error) {
                    console.error("Chat route streaming error:", error);
                    controller.enqueue(
                        encoder.encode(
                            `data: ${JSON.stringify({
                                error:
                                    "The AI response was interrupted. Please try again.",
                            })}\n\n`
                        )
                    );
                    controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                    controller.close();
                }
            },
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/event-stream; charset=utf-8",
                "Cache-Control": "no-cache, no-transform",
                Connection: "keep-alive",
            },
        });
    } catch (error) {
        console.error("Chat Route Error:", error);
        return Response.json(
            {
                success: false,
                message:
                    "Sorry, I'm unable to respond right now. Please try again later.",
            },
            { status: 500 }
        );
    }
}
