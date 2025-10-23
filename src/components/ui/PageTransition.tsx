"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [displayChildren, setDisplayChildren] = useState(children);
    const [showOverlay, setShowOverlay] = useState(true);

    useEffect(() => {
        setDisplayChildren(children);
        setShowOverlay(true);

        const timer = setTimeout(() => {
            setShowOverlay(false);
        }, 1600); // total transition time

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <AnimatePresence mode="wait">
                {showOverlay && (
                    <motion.div
                        key="overlay"
                        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                        {/* Animated Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h1 className="text-4xl md:text-7xl  font-mono font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text  overflow-hidden whitespace-nowrap border-r-4 border-white animate-typing">
                                DHU-TECH
                            </h1>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                <motion.div
                    key={pathname}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative"
                >
                    {displayChildren}
                </motion.div>
            </AnimatePresence>
        </>
    );
}
