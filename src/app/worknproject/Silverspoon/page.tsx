import React from "react";
import { WorkDetailsTemplate } from "../components/WorkDetailsTemplate";
import { SectionDirectoryItem } from "../../../components/Section/SectionDirectory";
import { SectionCard } from "@/components/Card/SectionCard";
import { SectionContent } from "@/components/Section/SectionContent";
import { Role } from "@/components/Section/Role";
import { projectDirectoryItems } from "../components/ProjectDirectoryItems";

export default function SilverspoonPage() {
    return (
        <WorkDetailsTemplate
            title="Silverspoon"
            role="Full Stack Developer"
            timeline="2021 - 2023"
            mainImageURL="/research.png"
            subImageURL="/silverspoon.png"
            alt="Silverspoon Project"
            bgColor="fuchsia-500/20"
            directoryItems={projectDirectoryItems}
            subtitle="Creating an ERP tailored towards restaurants"
        >
            <>
                <SectionCard bgColor="fuchsia-500/20">
                    {/* overview */}
                    <div
                        className="flex w-full text-neutral-400 text-base"
                        id="overview"
                    >
                        <SectionContent width="70%" title="Overview">
                            <p>
                                Silverspoon is a web and mobile application that
                                allows restaurants to manage their business
                                operations. It is a comprehensive ERP
                                (Enterprise Resource Planning) system that
                                includes modules for inventory management,
                                sales, and customer relationship management. Our
                                goal is to help restaurant owners manage their
                                restaurant resources easily and efficiently.
                                <br />
                                <br />I created the first prototype of the
                                system, which was able to automatically
                                calculate replenishment data from importing
                                sales data through excel. After testing,
                                Silverspoon&apos;s value was clear, and a full
                                system was the obvious next step.
                                <br />
                                <br /> During my time at Silverspoon, I built
                                the core ERP system. I was responsible for both
                                front and back end development of over 20+
                                primary modules such as SKU Management,
                                Category/Subcategory, Waste Management, and
                                more.
                            </p>
                        </SectionContent>
                        <div className="flex flex-col gap-4 w-30% ml-auto">
                            <SectionContent title="My Role">
                                <p className="text-purple-200">
                                    Fullstack Developer
                                </p>
                            </SectionContent>
                            <SectionContent title="Team">
                                <Role name="Joe Pamornphol" role="CEO" />
                                <Role
                                    name="Tai Tantipiwatanaskul"
                                    role="Tech Lead"
                                />
                                <Role
                                    name="Fluke "
                                    role="Infrastructure Engineer"
                                />
                            </SectionContent>
                        </div>
                    </div>
                </SectionCard>
                <SectionCard bgColor="fuchsia-500/20">
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
                <SectionCard bgColor="fuchsia-500/20">
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
                <SectionCard bgColor="fuchsia-500/20">
                    {/* my role */}
                    <div
                        className="flex w-full text-neutral-400 text-base"
                        id="keyChallenges"
                    >
                        <SectionContent width="70%" title="Key Challenges">
                            <p></p>
                        </SectionContent>
                    </div>
                </SectionCard>
                <SectionCard bgColor="fuchsia-500/20">
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
                <SectionCard bgColor="fuchsia-500/20">
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
