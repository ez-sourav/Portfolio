import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

const ChatMessage = ({ message }) => {
    const isUser = message.role === "user";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`flex min-w-0 w-full gap-2 ${isUser ? "justify-end" : "justify-start"}`}
        >
            {!isUser && (
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-600 bg-slate-700">
                    <Bot size={14} className="text-orange-500" />
                </div>
            )}

            <div className={`min-w-0 max-w-[85%] xs:max-w-[82%] sm:max-w-[80%] break-words [overflow-wrap:anywhere] rounded-2xl px-3 sm:px-3.5 py-2 sm:py-2.5 text-sm leading-relaxed shadow-sm ${isUser ? "rounded-tr-sm bg-orange-500 text-white" : "rounded-tl-sm border border-slate-700/70 bg-[#131B2E] text-slate-200"} ${message.isError ? "border-red-500/30 bg-red-500/5 text-red-300" : ""}`}>
                <MessageContent content={message.content} isUser={isUser} />
            </div>

            {isUser && (
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-600 bg-slate-700">
                    <User size={14} className="text-slate-300" />
                </div>
            )}
        </motion.div>
    );
};

const MessageContent = ({ content, isUser }) => {
    if (!content) return null;

    return (
        <div className={`markdown-content min-w-0 break-words [overflow-wrap:anywhere] ${isUser ? "text-white" : "text-slate-200"}`}>
            <ReactMarkdown
                components={{
                    h1: ({ children }) => (
                        <h1 className="mb-3 mt-1 text-lg font-bold text-slate-100">
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="mb-2.5 mt-4 text-base font-bold text-slate-100">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="mb-2 mt-4 text-sm font-bold text-orange-500">
                            {children}
                        </h3>
                    ),
                    p: ({ children }) => (
                        <p className="mb-2.5 last:mb-0">
                            {children}
                        </p>
                    ),
                    strong: ({ children }) => (
                        <strong className={`font-semibold ${isUser ? "text-white" : "text-slate-100"}`}>
                            {children}
                        </strong>
                    ),
                    em: ({ children }) => (
                        <em className="italic">
                            {children}
                        </em>
                    ),
                    ul: ({ children }) => (
                        <ul className="my-2.5 ml-4 list-disc space-y-1.5">
                            {children}
                        </ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="my-2.5 ml-4 list-decimal space-y-1.5">
                            {children}
                        </ol>
                    ),
                    li: ({ children }) => (
                        <li className="pl-1">
                            {children}
                        </li>
                    ),
                    a: ({ href, children }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-orange-500 underline underline-offset-2 transition-colors hover:text-orange-400">
                            {children}
                        </a>
                    ),
                    hr: () => (
                        <hr className="my-4 border-slate-700/70" />
                    ),
                    code: ({ children }) => (
                        <code className="max-w-full break-words [overflow-wrap:anywhere] rounded bg-slate-800 px-1.5 py-0.5 font-mono text-xs text-orange-500">
                            {children}
                        </code>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote className="my-3 border-l-2 border-orange-500 pl-3 text-slate-400">
                            {children}
                        </blockquote>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default ChatMessage;