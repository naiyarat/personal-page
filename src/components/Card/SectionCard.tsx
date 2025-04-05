import React from "react";
import { cardBgColorMap } from "@/constants/colors";

interface SectionCardProps {
    children: React.ReactNode;
    bgColor?: keyof typeof cardBgColorMap;
}

export const SectionCard = ({
    children,
    bgColor = "white/20",
}: SectionCardProps) => {
    return (
        <div
            className={`w-full h-fit p-4 rounded-2xl bg-gradient-to-b ${cardBgColorMap[bgColor]} to-transparent`}
        >
            {children}
        </div>
    );
};
