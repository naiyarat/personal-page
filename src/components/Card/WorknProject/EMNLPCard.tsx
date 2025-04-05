import React from "react";
import { WorkCard } from "../WorkCard";

export const ResearchCard = () => {
    return (
        <WorkCard
            title="EMNLP 2024 Research Paper"
            role="Co-first Author"
            timeline="2023 – 2024"
            imageURL="/research.png"
            alt="research"
            bgColor="white/20"
            subtitle="Researching on the translation ability of quantized LLMs"
            link="/worknproject/EMNLPResearch"
        />
    );
};
