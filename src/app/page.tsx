"use client";

import { PageHeader } from "@/components/PageHeader";
import { WorkCard } from "@/components/WorkCard";
import {
    motion,
    useScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type DirectionType = "forwards" | "backwards";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<DirectionType>("forwards");

    // Example cards array - replace with your actual cards
    const cards = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        content: <WorkCard title={`Work ${i + 1}`} />,
    }));

    const slideVariants = {
        enter: (direction: DirectionType) => ({
            x: direction === "forwards" ? 1500 : "65%",
            opacity: 0.5,
            scale: 0.9,
        }),
        // center isnt actually center because of the right card lol, thats why its not going to the middle
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: DirectionType) => ({
            x: direction === "backwards" ? "65%" : "-65%",
            opacity: 0.5,
            scale: 0.9,
        }),
    };

    const nextCard = () => {
        setDirection("forwards");
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    };

    const prevCard = () => {
        setDirection("backwards");
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    return (
        <div className="flex flex-col w-full h-full scroll-y-auto overflow-x-hidden">
            {/* only show page header when scrolling down */}
            <PageHeader />

            <div className="flex flex-col w-full h-[80vh] px-20 py-4 relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/grayMountain.jpg')",
                        backgroundSize: "100% 130%",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        y: backgroundY,
                    }}
                />
                <div className="absolute inset-0 bg-gray-800/40 mix-blend-multiply z-[1]" />

                <div className="flex flex-col justify-center h-[90%] relative z-10">
                    <p className="text-8xl font-bold text-white">
                        Empowering people
                        <br />
                        through software
                    </p>
                </div>
                <div className="flex justify-end w-full h-[10%] text-white relative z-10">
                    <div className="flex flex-col">
                        <p className="text-xl font-bold">
                            Naiyarat Hanmatheekuna
                        </p>
                        <p className="text-l font-medium text-zinc-300">
                            Software Engineer
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-l from-neutral-900 to-[#182430] w-full h-[200vh] flex justify-center py-12 relative">
                <div className="flex flex-col w-full justify-center h-[60vh] items-center">
                    <motion.div className="absolute left-[-15%] w-1/3 opacity-50 scale-90 pointer-events-none">
                        {/* {currentIndex > 0 &&
                            cards[
                                (currentIndex - 1 + cards.length) % cards.length
                            ].content} */}
                        {cards[0].content}
                    </motion.div>

                    <div className="flex w-full justify-center h-full items-center">
                        <button
                            onClick={prevCard}
                            // disabled={currentIndex === 0}
                        >
                            <ChevronLeft className="text-neutral-300 w-12 h-12" />
                        </button>
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                className="w-1/2 justify-center"
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                            >
                                {cards[currentIndex].content}
                            </motion.div>
                        </AnimatePresence>
                        <button
                            onClick={nextCard}
                            disabled={currentIndex === cards.length - 1}
                        >
                            <ChevronRight className="text-neutral-300 w-12 h-12" />
                        </button>
                    </div>
                    <div className="absolute right-[-15%] w-1/3 opacity-50 scale-90 pointer-events-none">
                        {/* {currentIndex < cards.length - 1 &&
                            cards[(currentIndex + 1) % cards.length].content} */}
                        {cards[0].content}
                    </div>
                </div>
            </div>
        </div>
    );
}
