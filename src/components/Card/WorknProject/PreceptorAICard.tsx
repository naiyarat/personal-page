import React from "react";
import { WorkCard } from "../WorkCard";

export const PreceptorAICard = () => {
    return (
        <WorkCard
            title="PreceptorAI"
            role="Intern"
            timeline="2021 – 2022"
            imageURL="/PreceptorAI.png"
            alt="PreceptorAI"
            bgColor="teal-400/20"
            subtitle="Training a medical LLM"
            link="/worknproject/PreceptorAI"
        />
    );
};
