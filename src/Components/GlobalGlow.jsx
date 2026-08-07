import React, { useState, useEffect } from 'react';

const GlobalGlow = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div 
            className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
            style={{
                background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.10), transparent 80%)`
            }}
        />
    );
};

export default GlobalGlow;