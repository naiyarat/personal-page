'use client'
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

interface WorkCardProps {
    title: string;
    role: string;
    timeline: string;
    imageURL: string;
    link?: string;
    subtitle?: string;
    bgSize?: string;
}

export const EduCard = ({ title, role, timeline, imageURL, subtitle, link, bgSize = "100% 100%" }: WorkCardProps) => {
    const route = useRouter()
    const cardVariants = {
        hover: {
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
        },
      };
      
      const imageVariants = {
        hover: {
            opacity: 1,
        },
      };

    return (
            <motion.div
                className="group w-full h-[60vh] rounded-2xl border-[0.5px] border-gray-700 cursor-pointer shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
                onClick={() => route.push(link || '')}
                variants={cardVariants}
            whileHover="hover"
            transition={{
                duration: 0.5, ease: 'linear'
            }}

                style={{
                    backgroundImage: `url(${imageURL})`,
                    backgroundSize: bgSize,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                }}
            >
            <motion.div
                className="absolute inset-0 bg-neutral-200 mix-blend-multiply z-99 w-full rounded-2xl"
                variants={imageVariants}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                initial={{
                    opacity: 0
                }}
            />
            {/* header */}
                <div className="flex flex-col px-4 pt-4 h-fit pb-3 bg-linear-to-t to-gray-900 from-gray-800 rounded-t-2xl">
                    <p className="text-neutral-100 text-2xl font-black">{title}</p>
                    <p className="text-neutral-200 text-l font-light">{role} &bull; {timeline}</p>
                    <p className="text-neutral-400 text-sm font-extralight">{subtitle}</p>
                </div>
            </motion.div>
    );
};
