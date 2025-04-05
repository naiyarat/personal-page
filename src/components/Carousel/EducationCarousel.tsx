/* eslint-disable react/jsx-key */
import { motion, useAnimate, useInView } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { LeftButton } from '../Button/LeftButton';
import { RightButton } from '../Button/RightButton';
import { ChulaCard } from '../Card/Education/ChulaCard';
import { NewtonCard } from '../Card/Education/NewtonCard';

export const EducationCarousel = () => {
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
    }, [animate, isInView]);

    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % 3
            );
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 2) % 3
            );

            return updatedIndexes;
        });
    };

    const cards = [<ChulaCard />, <div />, <NewtonCard />];

    const positions = ['center', 'left', 'right'];

    const cardVariants = {
        center: { x: '0%', scale: 1, zIndex: 3 },
        left: { x: '-110%', scale: 0.7, zIndex: 2, opacity: 0.5 },
        right: { x: '110%', scale: 0.7, zIndex: 1, opacity: 0.5 },
    };

    return (
        <>
            <div className="absolute left-[20%] top-[63%] z-99">
                <LeftButton
                    handleBack={handleBack}
                    isButtonDisabled={isButtonDisabled}
                    isHidden={positionIndexes[0] === 0}
                />
            </div>
            {cards.map((card, index) => (
                <motion.div
                    className="w-1/2 justify-center absolute top-[50%]"
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
            <div className="absolute right-[20%] top-[63%] z-99">
                <RightButton
                    handleForward={handleNext}
                    isButtonDisabled={isButtonDisabled}
                    isHidden={positionIndexes[0] === 1}
                />
            </div>
            <div ref={scope} className="absolute top-[82%]">
                <motion.p
                    className="text-4xl text-white font-semibold"
                    initial={{ opacity: 0, y: 50 }}
                >
                    Education
                </motion.p>
            </div>
        </>
    );
};
