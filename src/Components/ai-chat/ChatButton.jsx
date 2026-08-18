import { motion, AnimatePresence } from "framer-motion";
import { Bot, X } from "lucide-react";

const ChatButton = ({ isOpen, onClick }) => {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
            aria-expanded={isOpen}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-slate-700 bg-[#171F33] shadow-[0_10px_30px_rgba(249,115,22,0.18)] transition-colors duration-300 hover:border-orange-500 hover:cursor-pointer focus:outline-none"
        >
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-full bg-orange-500/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                    <motion.span
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 flex"
                    >
                        <X size={22} className="text-orange-500" />
                    </motion.span>
                ) : (
                    <motion.span
                        key="bot"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 flex"
                    >
                        <Bot size={23} className="text-orange-500" />
                    </motion.span>
                )}
            </AnimatePresence>

            {!isOpen && (
                <span className="absolute right-0.5 top-0.5 z-20 h-3 w-3 rounded-full border-2 border-[#171F33] bg-orange-500" />
            )}
        </motion.button>
    );
};

export default ChatButton;