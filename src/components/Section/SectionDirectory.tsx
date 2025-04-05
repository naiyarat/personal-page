import { SectionLink } from "@/components/Section/SectionLink";
import { Line } from "@/components/Line";
import React from "react";

export type SectionDirectoryItem = {
    title: string;
    sectionId: string;
    isAlwaysInView?: boolean;
};

interface SectionDirectoryProps {
    items: SectionDirectoryItem[];
    currentSectionId?: string; // Currently visible section
}

export const SectionDirectory = ({
    items,
    currentSectionId,
}: SectionDirectoryProps) => {
    return (
        <section className="flex flex-col justify-center items-center text-zinc-100 w-full space-y-2">
            <div className="mb-5">
                <p className="text-zinc-100 text-lg font-light opacity-55">
                    DIRECTORY
                </p>
            </div>
            {items.map((item, index) => (
                <React.Fragment key={item.sectionId}>
                    <SectionLink
                        title={item.title}
                        sectionId={item.sectionId}
                        isInView={currentSectionId}
                    />
                    {index < items.length - 1 && <Line opacity={0.5} />}
                </React.Fragment>
            ))}
        </section>
    );
};
