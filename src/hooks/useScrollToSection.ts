import { useEffect, useState } from "react";

// Taking inspo from Fullpage.js - a hook for tracking scroll and triggering the next sections.

export const useScrollToSection = (scrollToSection, currentSection, sectionsLength) => {
    useEffect(() => {
        let lastScrollY = 0;
        let timeoutId = null;

        const handleScroll = (e) => {
            const currentScrollY = window.scrollY;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                if (currentScrollY > lastScrollY) {
                    // Downward scroll
                    if (currentSection < sectionsLength - 1) {
                        scrollToSection(currentSection + 1);
                    }
                } else if (currentScrollY < lastScrollY) {
                    // Upward scroll
                    if (currentSection > 0) {
                        scrollToSection(currentSection - 1);
                    }
                }

                lastScrollY = currentScrollY;
            }, 100);
        };

        window.addEventListener('wheel', handleScroll);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('wheel', handleScroll);
        };
    }, [scrollToSection, currentSection, sectionsLength]);
};
