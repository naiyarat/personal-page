import React from "react";
import { WorkDetailsTemplate } from "../components/WorkDetailsTemplate";
import { SectionCard } from "@/components/Card/SectionCard";
import { SectionContent } from "@/components/Section/SectionContent";
import { Role } from "@/components/Section/Role";
import { projectDirectoryItems } from "../components/ProjectDirectoryItems";

export default function PreceptorAI() {
    return (
        <WorkDetailsTemplate
            title="PreceptorAI"
            timeline="2021 – 2022"
            role="Intern"
            mainImageURL="/PreceptorAI.png"
            subImageURL="/PreceptorAI.png"
            alt="PreceptorAI"
            bgColor="teal-400/20"
            subtitle="Training a medical LLM"
            directoryItems={projectDirectoryItems}
        >
            <>
                <SectionCard bgColor="teal-400/20">
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
                                <p className="text-teal-200">Intern</p>
                            </SectionContent>
                            <SectionContent title="Team">
                                {/* Team members will be added later */}
                            </SectionContent>
                        </div>
                    </div>
                </SectionCard>
                <SectionCard bgColor="teal-400/20">
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
                <SectionCard bgColor="teal-400/20">
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
                <SectionCard bgColor="teal-400/20">
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
                <SectionCard bgColor="teal-400/20">
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
                <SectionCard bgColor="teal-400/20">
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
