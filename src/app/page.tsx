"use client";

import { EducationCarousel } from "@/components/Carousel/EducationCarousel";
import { WorkAndProjectsCarousel } from "@/components/Carousel/WorkAndProjectsCarousel";
import { Line } from "@/components/Line";
import { SectionLink } from "@/components/Section/SectionLink";
import {
    motion,
    useAnimate,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { siGithub } from "simple-icons";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    useEffect(() => {
        if (isInView) {
            animate(
                "p",
                { opacity: 1, x: 0 },
                { duration: 1.2, ease: "easeInOut" }
            );
            animate(
                "section",
                { opacity: 1, x: 0 },
                { duration: 1.2, ease: "linear" }
            );
        }
    }, [isInView, animate]);

    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

    return (
        <div className="flex flex-col w-full h-full scroll-y-auto overflow-x-clip">
            {/* only show page header when scrolling down */}
            <div
                className="flex w-full h-[90vh] px-20 py-4 relative"
                id="intro"
                ref={scope}
            >
                {/* bg photo */}
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

                {/* bg filter */}
                <div className="absolute inset-0 bg-gray-800/20 mix-blend-multiply z-[1] w-[0%]" />
                <div className="flex flex-col justify-center h-full relative z-10 w-[80%]">
                    <motion.p
                        className="text-8xl font-bold text-white"
                        initial={{
                            opacity: 0,
                            x: 50,
                        }}
                    >
                        Empowering people
                        <br />
                        through software
                    </motion.p>
                </div>

                <div className="flex flex-col w-[20%] h-full relative z-10 mb-6">
                    <motion.section
                        className="flex flex-col justify-center items-center mb-auto text-zinc-100"
                        initial={{
                            opacity: 0,
                        }}
                    >
                        <SectionLink
                            title="Intro"
                            sectionId="intro"
                            isAlwaysInView
                        />
                        <Line />
                        <SectionLink
                            title="Work & Projects"
                            sectionId="work&projects"
                        />
                        <Line />
                        <SectionLink
                            title="Education"
                            sectionId="education"
                            isAlwaysInView
                        />
                        <Line />
                        <SectionLink
                            title="Skills & Tools"
                            sectionId="skills&tools"
                            isAlwaysInView
                        />
                    </motion.section>
                    <motion.section
                        className="flex flex-col space-y-2"
                        initial={{
                            opacity: 0,
                        }}
                    >
                        <div>
                            <p className="text-xl font-bold text-white">
                                Naiyarat Hanmatheekuna
                            </p>
                            <p className="text-l font-medium text-zinc-300">
                                Software Engineer
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <Link href="https://github.com/naiyarat">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    role="img"
                                >
                                    <path d={siGithub.path} />
                                </svg>
                            </Link>
                            <Link href="https://www.linkedin.com/in/naiyarat-hanmatheekuna-b079a12a0/">
                                <Linkedin color="white" />
                            </Link>
                            <Link
                                href="/Resume2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="underline text-white font-light">
                                    resume
                                </p>
                            </Link>
                        </div>
                    </motion.section>
                </div>
            </div>

            {/* <PageHeader /> */}

            <div className="bg-gradient-to-l from-neutral-900 to-zinc-950 w-full h-[200vh] flex justify-center relative">
                <div className="flex flex-col w-full justify-center h-[60vh] items-center space-y-48">
                    {/* anchors for scroll */}
                    <WorkAndProjectsCarousel />
                    <div id="work&projects" className="mt-[8%]" />

                    {/* anchors for scroll */}
                    <EducationCarousel />
                    <div id="education" className="mt-[33%]" />
                </div>
            </div>
        </div>
    );
}
