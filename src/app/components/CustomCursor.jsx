"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth animation
    const smoothX = useSpring(cursorX, { stiffness: 150, damping: 20 });
    const smoothY = useSpring(cursorY, { stiffness: 150, damping: 20 });

    useEffect(() => {
        const moveCursor = (e) => {
            const x = Math.min(window.innerWidth - 10, Math.max(10, e.clientX));
            const y = Math.min(window.innerHeight - 10, Math.max(10, e.clientY));
            cursorX.set(x);
            cursorY.set(y);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);


    return (
        <motion.div
            className="cursor"
            style={{
                x: smoothX,
                y: smoothY,
            }}
        />
    );
}
