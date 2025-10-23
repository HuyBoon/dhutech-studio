"use client";

import { ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [scrollPercent, setScrollPercent] = useState<number>(0);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Show or hide the button based on scroll position and calculate scroll percentage
    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const docHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = (scrollTop / docHeight) * 100;

        setScrollPercent(scrolled);
        setIsVisible(scrollTop > 300);
    };

    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // SVG circle dimensions
    const radius = 23; // radius of the circle
    const circumference = 2 * Math.PI * radius; // circumference of the circle

    return (
        <div>
            <button
                className={`fixed cursor-pointer bottom-5 right-5 z-1000 p-3 rounded-full bg-btn text-black shadow-md transition-opacity duration-300 flex items-center justify-center ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
                onClick={scrollToTop}
                title="Go to top"
            >
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    className="absolute top-0 left-0 w-full h-full"
                >
                    <circle
                        cx="25"
                        cy="25"
                        r={radius}
                        fill="none"
                        stroke="#0881f9"
                        strokeWidth="2"
                    />
                    <circle
                        cx="25"
                        cy="25"
                        r={radius}
                        fill="none"
                        stroke="#1fc1c1"
                        strokeWidth="2"
                        strokeDasharray={circumference}
                        strokeDashoffset={
                            circumference -
                            (scrollPercent / 100) * circumference
                        }
                        strokeLinecap="round"
                    />
                </svg>
                <ArrowUp />
            </button>
        </div>
    );
};

export default ScrollToTopButton;
