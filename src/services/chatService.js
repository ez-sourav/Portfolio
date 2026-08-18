import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const chatApi = axios.create({
    baseURL: API_URL,
    timeout: 60000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const sendChatMessage = async (
    message,
    history = []
) => {
    if (!message || typeof message !== "string") {
        throw new Error("Message is required.");
    }

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
        throw new Error("Message cannot be empty.");
    }

    try {
        const response = await chatApi.post("/api/chat", {
            message: trimmedMessage,
            history,
        });

        if (!response.data?.success) {
            throw new Error(
                response.data?.message ||
                    "Unable to get a response."
            );
        }

        return response.data;
    } catch (error) {
        console.error(
            "Chat API Error:",
            error
        );

        if (error.response?.data?.message) {
            throw new Error(
                error.response.data.message
            );
        }

        if (error.code === "ECONNABORTED") {
            throw new Error(
                "The AI response took too long. Please try again."
            );
        }

        if (!error.response) {
            throw new Error(
                "Unable to connect to the chat server."
            );
        }

        throw new Error(
            "Unable to get a response right now. Please try again."
        );
    }
};