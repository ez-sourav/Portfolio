import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen((previous) => !previous);
    const handleClose = () => setIsOpen(false);

    // Lock background scroll 
    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    return (
        <div
            className="
                fixed
                bottom-0
                right-0
                sm:bottom-6
                sm:right-6
                z-50
                flex
                flex-col
                items-end
                gap-4
            "
        >
            <AnimatePresence>
                {isOpen && <ChatWindow onClose={handleClose} />}
            </AnimatePresence>

            <div className={`m-4 sm:m-0 ${isOpen ? "max-sm:hidden" : ""}`}>
                <ChatButton isOpen={isOpen} onClick={handleToggle} />
            </div>
        </div>
    );
};

export default AIChat;