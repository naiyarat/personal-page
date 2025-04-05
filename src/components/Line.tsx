import React from "react";

interface LineProps {
    opacity?: number;
}

export const Line = ({ opacity = 1 }: LineProps) => {
    return (
        <div
            className="h-8 w-[1px] bg-zinc-100 transition-opacity duration-300"
            style={{ opacity }}
        />
    );
};
