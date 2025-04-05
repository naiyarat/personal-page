"use client";

import { bgColorMap } from "@/constants/colors";
import React from "react";
import {
    SectionDirectory,
    SectionDirectoryItem,
} from "../../../components/Section/SectionDirectory";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeftCircle } from "lucide-react";

type WorkDetailsTemplateProps = {
    title: string;
    timeline: string;
    role: string;
    mainImageURL: string;
    subImageURL: string;
    alt: string;
    directoryItems: SectionDirectoryItem[];
    children: React.ReactNode;
    subtitle: string;
    bgColor?: string;
};

export const WorkDetailsTemplate = ({
    title,
    timeline,
    mainImageURL,
    subImageURL,
    alt,
    children,
    directoryItems,
    subtitle,
    bgColor = "red-600/20", // Default color same as WorkCard
}: WorkDetailsTemplateProps) => {
    // Get the mapped color class or use default
    const bgColorClass = bgColorMap[bgColor] || "from-red-600/20";

    return (
        <div className="w-full h-full">
            {/* header */}
            <div
                className={`flex w-full h-[75vh] px-20 py-4 relative bg-gradient-to-t ${bgColorClass} via-zinc-900 py-12`}
            >
                <div className="flex flex-col space-y-2 w-full">
                    {/* Title and subtitle with slide animation */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => (window.location.href = "/")}
                                className="text-neutral-100 hover:text-neutral-300 transition-colors"
                            >
                                <ChevronLeftCircle size={36} />
                            </button>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-neutral-100 text-4xl font-black">
                                    {title}
                                </h1>
                                <p className="text-neutral-400 text-l font-extralight">
                                    {timeline} &bull; {subtitle}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex w-full h-full justify-center relative">
                        <motion.div
                            className="flex w-full h-[90%] justify-center relative"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.3,
                                ease: "linear",
                            }}
                        >
                            {/* Background image (slightly offset) */}
                            <Image
                                src={mainImageURL}
                                alt={alt}
                                height={0}
                                width={0}
                                className="rounded-xs mt-7 absolute opacity-100"
                                sizes="100vw"
                                style={{
                                    width: "auto",
                                    height: "80%",
                                    transform:
                                        "translateX(-10rem) translateY(5rem)",
                                }}
                            />
                            {/* Foreground image */}
                            <Image
                                src={subImageURL}
                                alt={alt}
                                height={0}
                                width={0}
                                className="rounded-xs mt-7 relative z-10"
                                sizes="100vw"
                                style={{
                                    width: "auto",
                                    height: "80%",
                                    transform: "translateX(8rem)",
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div
                className="flex w-full h-fit"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1.2,
                    ease: "linear",
                    delay: 0.3,
                }}
            >
                <div className="flex sticky top-0 w-[20%] h-[80vh]">
                    <SectionDirectory
                        items={directoryItems}
                        currentSectionId={"overview"}
                    />
                </div>
                <div className="flex flex-col w-[100%] h-[300vh] py-12 space-y-6">
                    {children}
                </div>
                <div className="w-[20%]" />
            </motion.div>
        </div>
    );
};
