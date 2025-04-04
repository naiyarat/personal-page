'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface WorkCardProps {
    title: string;
    role: string;
    timeline: string;
    imageURL: string;
    alt: string;
    size?: number;
    link?: string;
    subtitle?: string;
}

export const WorkCard = ({ title, role, timeline, imageURL, alt, link, size = 600, subtitle }: WorkCardProps) => {
    const route = useRouter()
    const cardVariants = {
        hover: {
            backgroundColor: "#1e2939",
            boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
        },
      };
      
      const imageVariants = {
        hover: {
          scale: 1.05,
          y: -10,
        },
      };
      
    return (
        <motion.div
            className="bg-gradient-to-t from-red-600/20 via-gray-900 w-full h-[60vh] rounded-2xl border-[1px] border-gray-700 cursor-pointer shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
            variants={cardVariants}
            whileHover="hover"
            onClick={() => route.push(link || '')}
            transition={{
                duration: 0.5,
                ease: "linear",
            }}
        >
            {/* header */}
            <div className="flex flex-col px-4 pt-4 h-[10%]">
                <p className="text-neutral-100 text-2xl font-black">{title}</p>
                <p className="text-neutral-200 text-l font-light">{role} &bull; {timeline}</p>
                <p className="text-neutral-400 text-sm font-extralight">{subtitle}</p>
            </div>

            <motion.div
                className="flex w-full h-[90%] justify-center"
                variants={imageVariants}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <Image
                    src={imageURL}
                    alt={alt}
                    height={size}
                    width={size}
                    className="rounded-t-lg mt-auto"
                />
            </motion.div>
        </motion.div>
    );
};
