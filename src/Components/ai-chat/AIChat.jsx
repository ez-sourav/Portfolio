"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const chatContainerRef = useRef(null);

    const handleToggle = () => setIsOpen((previous) => !previous);
    const handleClose = () => setIsOpen(false);

    // Close when clicking outside of the chat box or pressing Escape
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (
                chatContainerRef.current &&
                !chatContainerRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    // Lock background scroll on mobile screens only (where chat is full-screen 100dvh)
    useEffect(() => {
        if (!isOpen) return;

        const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
        if (!isMobile) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    return (
        <div
            ref={chatContainerRef}
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
