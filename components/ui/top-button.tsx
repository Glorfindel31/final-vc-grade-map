"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { FaChevronUp } from "react-icons/fa";
import { Button } from "./button";
interface BackToTopProps {
    className?: string;
    threshold?: number;
}

const BackToTop: React.FC<BackToTopProps> = ({ threshold = 100 }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const updateButtonVisibility = useCallback(() => {
        if (buttonRef.current) {
            if (window.scrollY > threshold) {
                buttonRef.current.style.opacity = "1";
                buttonRef.current.style.transform = "translateY(0px)";
                buttonRef.current.style.transition =
                    "opacity 0.1s ease-in-out, transform 0.3s ease-in-out";
            } else {
                buttonRef.current.style.opacity = "0";
                buttonRef.current.style.transform = "translateY(20px)";
                buttonRef.current.style.transition =
                    "opacity 0.1s ease-in-out, transform 0.3s ease-in-out";
            }
        }
    }, [threshold]);

    useEffect(() => {
        updateButtonVisibility();

        const handleScroll = () => {
            updateButtonVisibility();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [updateButtonVisibility]);

    return (
        <Button
            ref={buttonRef}
            variant="outline"
            onClick={handleClick}
            className="fixed bottom-0 right-0 z-[50000] w-full h-8"
        >
            <FaChevronUp />
        </Button>
    );
};

export default BackToTop;
