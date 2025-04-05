import React from "react";

interface SectionLinkProps {
    sectionId: string;
    title: string;
    isInView?: string; // The currently visible section ID
    isAlwaysInView?: boolean; // Whether to always show at full opacity
}

export const SectionLink = ({
    sectionId,
    title,
    isInView,
    isAlwaysInView = false,
}: SectionLinkProps) => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const opacity = isAlwaysInView
        ? "opacity-100"
        : isInView === sectionId
        ? "opacity-100"
        : "opacity-40";

    return (
        <p
            className={`text-l font-light cursor-pointer transition-opacity duration-300 ${opacity} hover:opacity-100`}
            onClick={() => scrollToSection(sectionId)}
        >
            {title}
        </p>
    );
};
