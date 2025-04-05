import React from "react";
import { WorkCard } from "../WorkCard";

export const SSSMCard = () => {
    return (
        <WorkCard
            title="Silverspoon Stock Management"
            role="Fullstack Developer"
            timeline="2021 – 2023"
            imageURL="/silverspoon.png"
            alt="silverspoon"
            link="/worknproject/Silverspoon"
            bgColor="fuchsia-500/20"
            subtitle="Creating an ERP tailored towards restaurants"
        />
    );
};
