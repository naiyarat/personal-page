import React from "react";

type SectionContentProps = {
    title: string;
    width?: string;
    children?: React.ReactNode;
};

export const SectionContent = ({
    title,
    width = "fit-content",
    children,
}: SectionContentProps) => {
    return (
        <div style={{ width: width }} className="flex flex-col gap-2">
            <p className="text-white text-sm">{title}</p>
            {children}
        </div>
    );
};
