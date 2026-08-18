import { useRef } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ChatInput = ({ value, onChange, onSend, disabled = false }) => {
    const textareaRef = useRef(null);

    const handleChange = (event) => {
        const newValue = event.target.value;
        onChange(newValue);

        const textarea = textareaRef.current;
        if (!textarea) return;

        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            if (!disabled && value.trim()) onSend();
        }
    };

    const handleSend = () => {
        if (disabled || !value.trim()) return;
        onSend();
        if (textareaRef.current) textareaRef.current.style.height = "44px";
    };

    return (
        <div className="border-t border-slate-700 bg-[#0F172A] px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <div className="relative flex items-end">
                <textarea
                    ref={textareaRef}
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    disabled={disabled}
                    rows={1}
                    maxLength={300}
                    placeholder="Ask about Sourav..."
                    className="chat-scroll min-h-11 max-h-30 w-full resize-none rounded-lg border border-slate-700 bg-[#131B2E] py-2.5 pl-3 pr-11 text-sm leading-5 text-slate-100 outline-none placeholder:text-slate-500 transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <motion.button
                    type="button"
                    onClick={handleSend}
                    disabled={disabled || !value.trim()}
                    aria-label="Send message"
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-md text-orange-500 transition hover:cursor-pointer hover:bg-orange-500/10 hover:text-orange-400 disabled:cursor-not-allowed disabled:opacity-30"
                >
                    <Send size={18} />
                </motion.button>
            </div>

            <div className="mt-2 flex items-center justify-between">
                <p className="text-center font-mono text-[10px] text-slate-600">
                    <span className="hidden xs:inline">Enter to send · Shift + Enter for new line</span>
                    <span className="xs:hidden">Enter to send</span>
                </p>

                <span className={`text-[10px] ${value.length >= 270 ? "text-orange-400" : "text-slate-600"}`}>
                    {value.length}/300
                </span>
            </div>
        </div>
    );
};

export default ChatInput;