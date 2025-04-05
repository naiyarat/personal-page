import React from 'react';
import { WorkCard } from '../WorkCard';

export const TestSimCard = () => {
    return (
        <WorkCard
            title="Interpass SelfU Redesign"
            role="Fullstack Developer"
            timeline="2024 – present"
            imageURL="/InterpassTestSimulator.png"
            alt="Interpass Test Simulator"
            bgColor="blue-400/20"
            subtitle="Redesigning an outdated testing system"
        />
    );
};
