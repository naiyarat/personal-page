/* eslint-disable react/jsx-key */
import { motion, useAnimate, useInView } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { LeftButton } from '../Button/LeftButton';
import { RightButton } from '../Button/RightButton';
import { SSSMCard } from '../Card/WorknProject/SSSMCard';
import { TruthWalletCard } from '../Card/WorknProject/TruthWalletCard';
import { TestSimCard } from '../Card/WorknProject/InterpassTestSimCard';
import { ResearchCard } from '../Card/WorknProject/EMNLPCard';
import { PreceptorAICard } from '../Card/WorknProject/PreceptorAICard';

export const WorkAndProjectsCarousel = () => {
    const [scope, animate] = useAnimate();

    const isInView = useInView(scope);

    useEffect(() => {
        if (isInView) {
            animate(
                'p',
                { opacity: 1, y: 0 },
                { duration: 1.5, ease: 'linear' }
            );
        }
    }, [isInView, animate]);

    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % 5
            );
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
            );

            return updatedIndexes;
        });
    };

    const cards = [
        <TestSimCard />,
        <SSSMCard />,
        <PreceptorAICard />,
        <ResearchCard />,
        <TruthWalletCard />,
    ];

    const positions = ['center', 'left1', 'left', 'right', 'right1'];

    const cardVariants = {
        center: { x: '0%', scale: 1, zIndex: 5 },
        left1: { x: '-110%', scale: 0.7, zIndex: 3, opacity: 0.5 },
        right1: { x: '110%', scale: 0.7, zIndex: 3, opacity: 0.5 },
        left: { x: '-200%', scale: 0.5, zIndex: 2, display: 'none' },
        right: { x: '200%', scale: 0.5, zIndex: 1, display: 'none' },
    };

    return (
        <>
            <div className="absolute left-[20%] top-[18%] z-99">
                <LeftButton
                    handleBack={handleBack}
                    isButtonDisabled={isButtonDisabled}
                />
            </div>
            {cards.map((card, index) => (
                <motion.div
                    className="w-1/2 justify-center absolute top-[5%]"
                    key={index}
                    variants={cardVariants}
                    animate={positions[positionIndexes[index]]}
                    transition={{
                        duration: 1,
                    }}
                    onAnimationStart={() => setIsButtonDisabled(true)}
                    onAnimationComplete={() => setIsButtonDisabled(false)}
                >
                    {card}
                </motion.div>
            ))}
            <div className="absolute right-[20%] top-[18%] z-99">
                <RightButton
                    handleForward={handleNext}
                    isButtonDisabled={isButtonDisabled}
                />
            </div>

            <div ref={scope} className="absolute top-[37%]">
                <motion.p
                    className="text-4xl text-white font-semibold"
                    initial={{ opacity: 0, y: 50 }}
                >
                    Work & Projects
                </motion.p>
            </div>
        </>
    );
};
