'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface WorkCardProps {
    title: string;
    role: string;
    timeline: string;
    imageURL: string;
    alt: string;
    size?: number;
    link?: string;
    subtitle?: string;
    bgColor?: string;
}

// Color mapping for background colors
const bgColorMap: Record<string, string> = {
    'red-600/20': 'from-red-600/20',
    'fuchsia-500/20': 'from-fuchsia-500/20',
    'teal-400/20': 'from-teal-400/20',
    'blue-400/20': 'from-blue-400/20',
    'white/20': 'from-white/20',
    // Add more colors as needed
};

export const WorkCard = ({
    title,
    role,
    timeline,
    imageURL,
    alt,
    link,
    bgColor = 'red-600/20',
    subtitle,
}: WorkCardProps) => {
    const route = useRouter();
    const cardVariants = {
        hover: {
            backgroundColor: '#1e2939',
            boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)',
        },
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            y: -10,
        },
    };

    // Get the mapped color class or use a default
    const bgColorClass = bgColorMap[bgColor] || 'from-red-600/20';

    return (
        <motion.div
            className={`bg-gradient-to-t ${bgColorClass} via-gray-900 w-full sm:h-[60vh] rounded-2xl border-[1px] border-gray-700 cursor-pointer shadow-[0_4px_15px_rgba(255,255,255,0.1)]`}
            variants={cardVariants}
            whileHover="hover"
            onClick={() => route.push(link || '')}
            transition={{
                duration: 0.5,
                ease: 'linear',
            }}
        >
            {/* header */}
            <div className="flex flex-col px-4 pt-4 h-[10%]">
                <p className="text-neutral-100 text-2xl font-black">{title}</p>
                <p className="text-neutral-200 text-l font-light">
                    {role} &bull; {timeline}
                </p>
                <p className="text-neutral-400 text-sm font-extralight">
                    {subtitle}
                </p>
            </div>

            <motion.div
                className="flex w-full h-[90%] justify-center"
                variants={imageVariants}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <Image
                    src={imageURL}
                    alt={alt}
                    height={0}
                    width={0}
                    className="rounded-t-lg mt-auto"
                    sizes="100vw"
                    style={{ width: 'auto', height: '80%' }} // optional
                />
            </motion.div>
        </motion.div>
    );
};
