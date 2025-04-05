import React from "react";
import { WorkDetailsTemplate } from "../components/WorkDetailsTemplate";
import { SectionCard } from "@/components/Card/SectionCard";
import { SectionContent } from "@/components/Section/SectionContent";
import { Role } from "@/components/Section/Role";
import { projectDirectoryItems } from "../components/ProjectDirectoryItems";

export default function EMNLPResearch() {
    return (
        <WorkDetailsTemplate
            title="EMNLP 2024 Research Paper"
            timeline="2023 – 2024"
            role="Co-first Author"
            mainImageURL="/research.png"
            subImageURL="/research.png"
            alt="research"
            bgColor="white/20"
            subtitle="Researching on the translation ability of quantized LLMs"
            directoryItems={projectDirectoryItems}
        >
            <>
                <SectionCard bgColor="white/20">
                    {/* overview */}
                    <div
                        className="flex w-full text-neutral-400 text-base"
                        id="overview"
                    >
                        <SectionContent width="70%" title="Overview">
                            <p>{/* Content will be added later */}</p>
                        </SectionContent>
                        <div className="flex flex-col gap-4 w-30% ml-auto">
                            <SectionContent title="My Role">
                                <p className="text-white">Co-first Author</p>
                            </SectionContent>
                            <SectionContent title="Team">
                                {/* Team members will be added later */}
                            </SectionContent>
                        </div>
                    </div>
                </SectionCard>
                <SectionCard bgColor="white/20">
                    {/* web gallery */}
                    <div
                        className="flex w-full text-neutral-400 text-base"
                        id="webgallery"
                    >
                        <SectionContent width="70%" title="Web Gallery">
                            <p></p>
                        </SectionContent>
                    </div>
                </SectionCard>
                <SectionCard bgColor="white/20">
                    {/* painpoint */}
                    <div
                        className="flex w-full text-neutral-400 text-base"
                        id="painpoint"
                    >
                        <SectionContent width="70%" title="Painpoint">
                            <p></p>
                        </SectionContent>
                    </div>
                </SectionCard>
                <SectionCard bgColor="white/20">
                    {/* key challenges */}
                    <div
                        className="flex w-full text-neutral-400 text-base"
                        id="keyChallenges"
                    >
                        <SectionContent width="70%" title="Key Challenges">
                            <p></p>
                        </SectionContent>
                    </div>
                </SectionCard>
                <SectionCard bgColor="white/20">
                    {/* learned insights */}
                    <div
                        className="flex w-full text-neutral-400 text-base"
                        id="learnedInsights"
                    >
                        <SectionContent width="70%" title="Learned Insights">
                            <p></p>
                        </SectionContent>
                    </div>
                </SectionCard>
                <SectionCard bgColor="white/20">
                    {/* conclusion */}
                    <div
                        className="flex w-full text-neutral-400 text-base"
                        id="conclusion"
                    >
                        <SectionContent width="70%" title="Conclusion">
                            <p></p>
                        </SectionContent>
                    </div>
                </SectionCard>
            </>
        </WorkDetailsTemplate>
    );
}
