import React from "react";
import { WorkDetailsTemplate } from "../components/WorkDetailsTemplate";
import { SectionCard } from "@/components/Card/SectionCard";
import { SectionContent } from "@/components/Section/SectionContent";
import { Role } from "@/components/Section/Role";
import { SectionDirectoryItem } from "@/components/Section/SectionDirectory";

const projectDirectoryItems: SectionDirectoryItem[] = [
    {
        title: "Overview and Research Question",
        sectionId: "overviewAndResearchQuestion",
    },
    { title: "Experiments", sectionId: "experiments" },
    { title: "Key Challenges", sectionId: "keyChallenges" },
    { title: "Learned Insights", sectionId: "learnedInsights" },
    { title: "Web Gallery", sectionId: "webgallery" },
    { title: "Conclusion", sectionId: "conclusion" },
];

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
            <SectionCard bgColor="white/20">
                {/* overview */}
                <div
                    className="flex w-full text-neutral-400 text-base space-x-4"
                    id="overview"
                >
                    <SectionContent
                        width="68%"
                        title="Overview and Research Question"
                    >
                        <p>
                            During my time at PreceptorAI, I was given the
                            opportunity to contribute, as a co-first author, to
                            research regarding how well quantized LLMs would
                            perform in resource constrained environments. We set
                            up this reseasrch question to see if LLMs could
                            provide better translations than Seq2Seq models in
                            enviromenets such as hospitals, where co
                        </p>
                    </SectionContent>
                    <div className="flex flex-col space-y-6 w-[32%] ml-auto">
                        <SectionContent title="My Role">
                            <p className="text-white">Co-first Author</p>
                        </SectionContent>
                        <SectionContent title="Team">
                            <Role
                                name="Jirat Chiaranaipanich"
                                role="Co-first Author"
                            />
                            <Role
                                name="Jitkapat Sawatphol"
                                role="Contributor"
                            />

                            <Role
                                name="Krittamate Tiankanon"
                                role="Contributor"
                            />

                            <Role
                                name="Jiramet Kinchagawat"
                                role="Contributor"
                            />

                            <Role
                                name="Amrest Chinkamol Parinthapat"
                                role="Contributor"
                            />

                            <Role
                                name="Pengpus Piyalitt Ittichaiwong"
                                role="Contributor"
                            />

                            <Role
                                name="Peerat Limkonchotiwat"
                                role="Contributor"
                            />
                        </SectionContent>
                        <SectionContent title="Project Type & Status">
                            <p className="text-blue-200">
                                Research Paper - Accepted & Published
                            </p>
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
        </WorkDetailsTemplate>
    );
}
