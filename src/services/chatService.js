const API_URL = import.meta.env.VITE_API_URL;

export const sendChatMessage = async (
    message,
    history = [],
    onChunk
) => {
    if (!message || typeof message !== "string") {
        throw new Error("Message is required.");
    }

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
        throw new Error("Message cannot be empty.");
    }

    if (typeof onChunk !== "function") {
        throw new Error("onChunk callback is required.");
    }

    try {
        const response = await fetch(`${API_URL}/api/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: trimmedMessage,
                history,
            }),
        });

        if (!response.ok) {
            let errorMessage =
                "Unable to get a response right now.";

            try {
                const errorData = await response.json();

                if (errorData?.message) {
                    errorMessage = errorData.message;
                }
            } catch {
                // Response was not JSON
            }

            throw new Error(errorMessage);
        }

        
        if (!response.body) {
            throw new Error(
                "Streaming is not supported by this browser."
            );
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        let buffer = "";
        let fullResponse = "";

        while (true) {
            const { value, done } = await reader.read();

            if (done) {
                break;
            }

            buffer += decoder.decode(value, {
                stream: true,
            });

            const events = buffer.split("\n\n");

            buffer = events.pop() || "";

            for (const event of events) {
                const line = event
                    .split("\n")
                    .find((line) =>
                        line.startsWith("data:")
                    );

                if (!line) {
                    continue;
                }

                const data = line
                    .slice(5)
                    .trim();

                // Stream finished
                if (data === "[DONE]") {
                    continue;
                }

                try {
                    const parsed = JSON.parse(data);

                    if (parsed.error) {
                        throw new Error(parsed.error);
                    }

                    if (parsed.text) {
                        fullResponse += parsed.text;

                        onChunk(parsed.text);
                    }
                } catch (parseError) {
                    if (
                        parseError instanceof Error &&
                        parseError.message !==
                            "Unexpected end of JSON input"
                    ) {
                        throw parseError;
                    }
                }
            }
        }

        buffer += decoder.decode();

        return {
            success: true,
            reply: fullResponse,
        };
    } catch (error) {
        console.error(
            "Chat API Error:",
            error
        );

        if (error.name === "AbortError") {
            throw new Error(
                "The AI response was stopped."
            );
        }

        if (
            error.message ===
            "Failed to fetch"
        ) {
            throw new Error(
                "Unable to connect to the chat server."
            );
        }

        throw new Error(
            error.message ||
                "Unable to get a response right now. Please try again."
        );
    }
};