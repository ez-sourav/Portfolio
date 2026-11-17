"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bot, RotateCcw, X } from "lucide-react";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import { sendChatMessage } from "../../services/chatService.js";

const INITIAL_MESSAGE = {
    id: "welcome",
    role: "assistant",
    content: "Hi! I'm Sourav's Portfolio Assistant. Ask me anything about his skills, education, experience, or projects.",
};

const windowVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        opacity: 0,
        y: 16,
        scale: 0.97,
        transition: { duration: 0.18, ease: "easeIn" },
    },
};

const ChatWindow = ({ onClose }) => {
    const [messages, setMessages] = useState(() => {
        try {
            if (typeof window !== "undefined") {
                const savedMessages = sessionStorage.getItem(
                    "portfolio-chat-messages"
                );

                return savedMessages
                    ? JSON.parse(savedMessages)
                    : [INITIAL_MESSAGE];
            }
            return [INITIAL_MESSAGE];
        } catch (error) {
            console.error(
                "Failed to load chat history:",
                error
            );

            return [INITIAL_MESSAGE];
        }
    });
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isStreaming, setIsStreaming] = useState(false);

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    useEffect(() => {
        try {
            sessionStorage.setItem(
                "portfolio-chat-messages",
                JSON.stringify(messages)
            );
        } catch (error) {
            console.error(
                "Failed to save chat history:",
                error
            );
        }
    }, [messages]);

    const getHistory = () =>
        messages
            .filter((message) => message.id !== "welcome")
            .map((message) => ({
                role: message.role === "assistant" ? "model" : "user",
                content: message.content,
            }));

    const handleSendMessage = async (messageText = input) => {
        const text = messageText.trim();

        if (!text || isLoading) return;

        const userMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content: text,
        };

        const assistantMessageId = crypto.randomUUID();

        setMessages((previous) => [
            ...previous,
            userMessage,
        ]);

        setInput("");
        setIsLoading(true);
        setIsStreaming(false);

        try {
            const history = [
                ...getHistory(),
                {
                    role: "user",
                    content: text,
                },
            ];

            await sendChatMessage(
                text,
                history,
                (chunk) => {
                    // First chunk has arrived
                    setIsStreaming(true);

                    setMessages((previous) => {
                        const assistantExists = previous.some(
                            (message) =>
                                message.id === assistantMessageId
                        );

                        // First chunk:
                        // create the assistant message
                        if (!assistantExists) {
                            return [
                                ...previous,
                                {
                                    id: assistantMessageId,
                                    role: "assistant",
                                    content: chunk,
                                },
                            ];
                        }

                        // Following chunks:
                        // append to existing message
                        return previous.map((message) =>
                            message.id === assistantMessageId
                                ? {
                                    ...message,
                                    content:
                                        message.content + chunk,
                                }
                                : message
                        );
                    });
                }
            );
        } catch (error) {
            console.error(
                "Chatbot request error:",
                error
            );

            setMessages((previous) => [
                ...previous,
                {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    isError: true,
                    content:
                        error.message ||
                        "Sorry, I couldn't respond right now. Please try again.",
                },
            ]);
        } finally {
            setIsLoading(false);
            setIsStreaming(false);
        }
    };

    const handleSuggestedQuestion = (question) => handleSendMessage(question);

    const handleClearChat = () => {
        if (isLoading) return;
        setMessages([INITIAL_MESSAGE]);
        setInput("");
    };

    return (
        <motion.div
            variants={windowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex h-[100dvh] w-full flex-col overflow-hidden bg-[var(--chat-bg)] sm:static sm:z-auto sm:h-[75vh] sm:max-h-[640px] sm:w-[380px] sm:rounded-2xl sm:border sm:border-[var(--chat-border)] sm:shadow-[0_15px_45px_rgba(0,0,0,0.15),0_0_25px_rgba(249,115,22,0.12)] dark:sm:shadow-[0_15px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(249,115,22,0.12)] lg:h-[600px] lg:w-[400px]"
        >
            {/* HEADER */}
            <div className="flex h-14 sm:h-16 shrink-0 items-center justify-between border-b border-[var(--chat-border)] bg-[var(--chat-header)] px-3 sm:px-4 pt-[env(safe-area-inset-top)] sm:pt-0">
                <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="relative">
                        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10">
                            <Bot size={16} className="text-orange-500" />
                        </div>

                        <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-[var(--chat-header)] bg-orange-500" />
                    </div>

                    <div className="min-w-0">
                        <h2 className="truncate text-sm font-semibold leading-tight text-[var(--text-primary)]">
                            Sourav's Portfolio Assistant
                        </h2>
                        <p className="text-[11px] sm:text-xs text-[var(--text-muted)]">
                            Ask me about Sourav
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-0.5 sm:gap-1">
                    <button
                        type="button"
                        onClick={handleClearChat}
                        disabled={isLoading}
                        aria-label="Clear conversation"
                        className="rounded-md p-2 text-[var(--text-secondary)] transition hover:bg-orange-500/10 hover:cursor-pointer hover:text-orange-500 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        <RotateCcw size={16} className="sm:hidden" />
                        <RotateCcw size={17} className="hidden sm:block" />
                    </button>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close chatbot"
                        className="rounded-md p-2 text-[var(--text-secondary)] transition hover:cursor-pointer hover:bg-orange-500/10 hover:text-orange-500"
                    >
                        <X size={18} className="sm:hidden" />
                        <X size={19} className="hidden sm:block" />
                    </button>
                </div>
            </div>

            {/* MESSAGES */}
            <div className="chat-scroll flex-1 overflow-y-auto bg-[var(--chat-messages)] p-3 sm:p-4">
                <div className="flex flex-col gap-3 sm:gap-4">
                    {messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}

                    {messages.length === 1 && (
                        <SuggestedQuestions
                            onSelect={handleSuggestedQuestion}
                            disabled={isLoading}
                        />
                    )}

                    {isLoading && !isStreaming && <TypingIndicator />}

                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* INPUT */}
            <ChatInput
                value={input}
                onChange={setInput}
                onSend={() => handleSendMessage()}
                disabled={isLoading}
            />
        </motion.div>
    );
};

const TypingIndicator = () => {
    return (
        <div className="flex max-w-[85%] gap-2">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10">
                <Bot size={14} className="text-orange-500" />
            </div>

            <div className="flex h-10.5 items-center gap-1 rounded-2xl rounded-tl-sm border border-[var(--chat-border)] bg-[var(--chat-assistant-bubble)] px-4">
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-orange-500/70"
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                            duration: 0.9,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChatWindow;