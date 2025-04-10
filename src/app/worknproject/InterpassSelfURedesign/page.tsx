import React from "react";
import { WorkDetailsTemplate } from "../components/WorkDetailsTemplate";
import { SectionCard } from "@/components/Card/SectionCard";
import { SectionContent } from "@/components/Section/SectionContent";
import { Role } from "@/components/Section/Role";
import { projectDirectoryItems } from "../components/ProjectDirectoryItems";

export default function InterpassSelfURedesign() {
    return (
        <WorkDetailsTemplate
            title="Interpass SelfU Redesign"
            timeline="2024 – present"
            role="Fullstack Developer"
            mainImageURL="/InterpassTestSimulator.png"
            subImageURL="/InterpassTestSimulator.png"
            alt="Interpass Test Simulator"
            bgColor="blue-400/20"
            subtitle="Redesigning an outdated testing system"
            directoryItems={projectDirectoryItems}
        >
            <SectionCard bgColor="blue-400/20">
                {/* overview */}
                <div
                    className="flex w-full text-neutral-400 text-base space-x-4"
                    id="overview"
                >
                    <SectionContent width="68%" title="Overview">
                        <p>
                            Due to{" "}
                            <span className="text-neutral-200">
                                extreme performance issues
                            </span>{" "}
                            and{" "}
                            <span className="text-neutral-200">
                                frequent crashes
                            </span>
                            , <span className="text-blue-200">Interpass</span>,
                            a tutoring school (my parent&apos;s main business)
                            for standardized testing, has requested a redesign
                            of their testing portal, as well as an integration
                            into their course system,{" "}
                            <span className="text-blue-200">SelfU</span>.
                            <br />
                            <br />
                            We plan not only to revise the whole web application
                            including{" "}
                            <span className="text-neutral-200">
                                video watching
                            </span>{" "}
                            and{" "}
                            <span className="text-neutral-200">
                                course advertisement
                            </span>
                            , but also upgrade their{" "}
                            <span className="text-neutral-200">
                                testing workflow
                            </span>
                            , allowing students to simulate tests with much more
                            realistic UI.
                            <br />
                            <br />
                            From my experience with standardized testing (e.g{" "}
                            <span className="text-blue-200">SAT</span>,{" "}
                            <span className="text-blue-200">TOEFL</span>) and
                            previous student of{" "}
                            <span className="text-blue-200">Interpass</span>, I
                            was played a key role not only in the development of
                            crucial features, but also in the design of the
                            overall application as well.
                        </p>
                    </SectionContent>
                    <div className="flex flex-col space-y-6 w-[32%]">
                        <SectionContent title="My Role">
                            <p className="text-blue-200">
                                Fullstack Developer, Designer
                            </p>
                        </SectionContent>
                        <SectionContent title="Team">
                            <Role name="Joe Pamornphol" role="CEO" />
                            <Role
                                name="Tai Tantipiwatanaskul"
                                role="Tech Lead"
                            />
                        </SectionContent>
                        <SectionContent title="Project Type & Status">
                            <p className="text-blue-200">
                                Client Project - Phase II Development
                            </p>
                        </SectionContent>
                    </div>
                </div>
            </SectionCard>
            <SectionCard bgColor="blue-400/20">
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
            <SectionCard bgColor="blue-400/20">
                {/* painpoint */}
                <div
                    className="flex w-full text-neutral-400 text-base"
                    id="painpoint"
                >
                    <SectionContent width="60%">
                        <div className="flex flex-col space-y-2 justify-center items-center mt-[10%] mr-4 text-neutral-100 font-bold text-3xl">
                            <p className="text-blue-200">System Crashes</p>
                            <p>and</p>
                            <p className="text-blue-200 mb-3">
                                Unsaved Progress
                            </p>
                        </div>
                    </SectionContent>
                    <SectionContent title="Painpoint">
                        <p>
                            Students using the old system exprienced critical
                            issues such as{" "}
                            <span className="text-neutral-100">
                                being unable to submit tests
                            </span>
                            ,{" "}
                            <span className="text-neutral-100">
                                progress loss
                            </span>
                            ,{" "}
                            <span className="text-neutral-100">
                                oversized/unloaded images
                            </span>
                            ,{" "}
                            <span className="text-neutral-100">
                                lacking tools
                            </span>
                            , and{" "}
                            <span className="text-neutral-100">
                                a shared UI across all exams
                            </span>{" "}
                            . For example, the English section of the{" "}
                            <span className="text-blue-200">SAT exam</span> does
                            not support{" "}
                            <span className="text-neutral-100">
                                text annotations
                            </span>{" "}
                            but incorrectly displayed a{" "}
                            <span className="text-blue-200">
                                Desmos graphing calculator
                            </span>{" "}
                            due to UI constraints.
                            <br />
                            <br />
                            These issues degraded the user experience of{" "}
                            <span className="text-blue-200">SelfU</span>,
                            preventing{" "}
                            <span className="text-blue-200">Interpass</span>{" "}
                            from hosting proper{" "}
                            <span className="text-neutral-100">
                                exam simulations
                            </span>
                            . Persistent crashes and progress loss also harmed
                            the school’s credibility.
                        </p>
                    </SectionContent>
                </div>
            </SectionCard>
            <SectionCard bgColor="blue-400/20">
                <div
                    className="flex w-full text-neutral-400 text-base"
                    id="featureSpotlight"
                >
                    <SectionContent title="Feature Spotlight">
                        <p>
                            An integral feature I worked on was the annotation
                            tool based on{" "}
                            <span className="text-blue-200">
                                Bluebook&apos;s
                            </span>{" "}
                            <span className="text-blue-200">
                                HighlightAndNotes
                            </span>{" "}
                            function, which allows users to add annotations to
                            the passage. This is an interesting feature I wrote
                            on <span className="text-blue-200">TipTapJS</span>{" "}
                            and{" "}
                            <span className="text-blue-200">ProseMirror</span>{" "}
                            that went through iterations before the final
                            version was achieved.
                            <br />
                            <br />
                            The first version of this I wrote with pure{" "}
                            <span className="text-blue-200">HTML</span> and{" "}
                            <span className="text-blue-200">CSS</span>, allowing
                            the user to highlight text and add notes. However, a
                            big issue was the{" "}
                            <span className="text-neutral-100">
                                difference in behaviour
                            </span>{" "}
                            compared to{" "}
                            <span className="text-blue-200">Bluebook</span>
                            &apos;s version. In{" "}
                            <span className="text-blue-200">Bluebook</span>,
                            annotations were seperate, allowing users to add or
                            edit through clicking on a specific annotation. With
                            my version, annotations instead blended together and
                            was edited/deleted through a{" "}
                            <span className="text-neutral-100">
                                range selection
                            </span>
                            .
                            <br />
                            <br />
                            To remedy this, I tried to use selection and HTML
                            tags with ids to create a highlight, thereby
                            allowing{" "}
                            <span className="text-neutral-100">
                                seperable annotations
                            </span>{" "}
                            and Bluebook-like control. However, this solution
                            proved problematic, as trying to use ids to realize
                            granular control resulted in issues with{" "}
                            <span className="text-neutral-100">
                                overlapping HTML tags
                            </span>
                            , creating tag fragments.
                            <br />
                            <br />
                            Therefore, after studying{" "}
                            <span className="text-blue-200">TipTapJS</span>, a
                            library built on{" "}
                            <span className="text-blue-200">ProseMirror</span>{" "}
                            (a powerful and modular rich text library), I
                            figured out how to create a{" "}
                            <span className="text-neutral-100">
                                custom extension
                            </span>
                            , utilizing{" "}
                            <span className="text-blue-200">ProseMirror</span>{" "}
                            plugins with inline HTML decorations. This solved
                            the issues with overlapping annotations , and
                            allowed{" "}
                            <span className="text-neutral-100">
                                granular control
                            </span>{" "}
                            of each annotation. After this main hurdle was
                            overcome, the feature was ready; matching with the{" "}
                            <span className="text-blue-200">Bluebook</span> tool
                            and ready for deployment.
                        </p>
                    </SectionContent>
                </div>
            </SectionCard>
            <SectionCard bgColor="blue-400/20">
                {/* my role */}
                <div
                    className="flex w-full text-neutral-400 text-base"
                    id="solution"
                >
                    <SectionContent title="The Solution">
                        <p>
                            A key requirement of this project was to develop
                            features in phases and deploy them seperately. Since
                            features such as{" "}
                            <span className="text-neutral-100">
                                video watching
                            </span>{" "}
                            and{" "}
                            <span className="text-neutral-100">
                                course enrolling
                            </span>{" "}
                            would not be implemented in the earlier phases but
                            still needed to available for use, we planned to
                            first revise the critical{" "}
                            <span className="text-neutral-100">
                                testing system
                            </span>{" "}
                            for <span className="text-blue-200">SAT</span> exams
                            and connect our new page to the legacy system ,
                            where these low level features were somewhat usable.
                            <br />
                            <br />
                            Therefore, utilizing{" "}
                            <span className="text-blue-200">T3</span> and{" "}
                            <span className="text-blue-200">NextJs</span>, we
                            created a complete testing system mimicking{" "}
                            <span className="text-blue-200">Bluebook</span>, the
                            offical app that{" "}
                            <span className="text-blue-200">SAT</span> test
                            takers use on real exams. Our current feature is
                            complete with basic features like{" "}
                            <span className="text-neutral-100">cross-out</span>{" "}
                            and{" "}
                            <span className="text-neutral-100">
                                question bookmarks
                            </span>
                            . Moreover, we have also implemented{" "}
                            <span className="text-neutral-100">
                                module specific tools
                            </span>{" "}
                            such as{" "}
                            <span className="text-blue-200">
                                HighlightAndNotes
                            </span>{" "}
                            for English, and{" "}
                            <span className="text-blue-200">Desmos</span> &
                            references for Math.
                            <br />
                            <br />
                            Our test page is up and running, and we are
                            currently working on the next phase of development,
                            which includes a rework of the main course features.
                        </p>
                    </SectionContent>
                </div>
            </SectionCard>

            <SectionCard bgColor="blue-400/20">
                <div
                    className="flex w-full text-neutral-400 text-base"
                    id="keyChallenges"
                >
                    <SectionContent title="Key Challenges">
                        <p>
                            On first glance, we believed that the cause of the{" "}
                            <span className="text-neutral-100">
                                frequent crashes
                            </span>{" "}
                            and{" "}
                            <span className="text-neutral-100">
                                inability for test submission
                            </span>{" "}
                            was due to the deployment of the application.
                            However, on closer inspection, it became clear that
                            the issue was rooted in unresolved{" "}
                            <span className="text-neutral-100">
                                technical debt
                            </span>{" "}
                            and{" "}
                            <span className="text-neutral-100">
                                lack of error handling
                            </span>
                            . Data was not validated properly, and just a bit of{" "}
                            dirty data would cause the whole system to fail
                            without any progress saving.
                        </p>
                    </SectionContent>
                    <SectionContent width="40%">
                        <div className="flex flex-col justify-center space-y-2 items-center mt-[10%] text-neutral-100 font-bold text-3xl">
                            <p className="text-blue-200">Tech Debt</p>
                            <p className="">and</p>
                            <p className="text-blue-200">Migration</p>
                        </div>
                    </SectionContent>
                </div>
                <SectionContent>
                    <p className="text-neutral-400 text-base pt-4">
                        Consequently, the most challenging part of this project
                        was{" "}
                        <span className="text-neutral-100">
                            communicating with the legacy developers
                        </span>{" "}
                        and{" "}
                        <span className="text-neutral-100">integrating</span>{" "}
                        our new testing system into the{" "}
                        <span className="text-neutral-100">legacy system</span>.
                        Since it was written with an array of tools such as{" "}
                        <span className="text-blue-200">VueJS</span>,{" "}
                        <span className="text-blue-200">Angular</span>, and{" "}
                        <span className="text-blue-200">PHP</span>, we decided
                        to redesign the whole system eventually, simplfying the{" "}
                        technical side as well as removing deprecated packages
                        which caused issues.
                    </p>
                </SectionContent>
            </SectionCard>
            <SectionCard bgColor="blue-400/20">
                {/* learned insights */}
                <div
                    className="flex flex-col w-full text-neutral-400 text-base space-y-4"
                    id="learnedInsights"
                >
                    <SectionContent title="Learned Insights">
                        <p>
                            This project was my first time working with a{" "}
                            <span className="text-neutral-100">
                                legacy codebase
                            </span>
                            . Navigating through it and creating a solution that{" "}
                            leverages the legacy system defined proved
                            challenging and taught me a lot about how to handle{" "}
                            old code and import and deal with dirty data.
                        </p>{" "}
                    </SectionContent>
                    <div className="flex space-x-2 w-full pt-4">
                        <SectionContent title="Technical Skills" width="50%">
                            <p>
                                I learned how to use{" "}
                                <span className="text-blue-200">
                                    T3 (tech stack of Typescript, NextJS,
                                    Drizzle and etc)
                                </span>
                                , and how to handle working with legacy
                                codebases.
                                <br />
                                <br />I also learned how to use{" "}
                                <span className="text-blue-200">
                                    TipTapJS
                                </span>{" "}
                                and{" "}
                                <span className="text-blue-200">
                                    ProseMirror
                                </span>{" "}
                                to manipulate rich text and create tools for
                                annotation.
                            </p>
                        </SectionContent>
                        <SectionContent title="Buisiness Skills" width="50%">
                            <p>
                                I further improved my skills as a{" "}
                                <span className="text-neutral-100">
                                    designer
                                </span>
                                , gaining practice on how to{" "}
                                <span className="text-neutral-100">
                                    communicate with customers
                                </span>{" "}
                                and{" "}
                                <span className="text-neutral-100">
                                    create designs
                                </span>{" "}
                                based on their requirements.
                                <br />
                                <br />I also learned the importance of{" "}
                                <span className="text-neutral-100">
                                    releasing features phase by phase
                                </span>
                                , especially for a project that requires{" "}
                                <span className="text-neutral-100">
                                    legacy features
                                </span>{" "}
                                to be available during development, enabling our
                                clients to continue their work as usual.
                            </p>{" "}
                        </SectionContent>
                    </div>
                </div>
            </SectionCard>
            <SectionCard bgColor="blue-400/20">
                {/* conclusion */}
                <div
                    className="flex w-full text-neutral-400 text-base"
                    id="conclusion"
                >
                    <SectionContent title="Conclusion">
                        <p>
                            Being able to work on the project and contribute to{" "}
                            <span className="text-blue-200">Interpass</span>, a
                            business that has raised me has truly been a{" "}
                            priviledge. I will continue working hard and
                            hopefully deliver a final product that can enhance{" "}
                            <span className="text-blue-200">
                                Interpass&apos;s
                            </span>{" "}
                            productivity further.
                        </p>
                    </SectionContent>
                </div>
            </SectionCard>
        </WorkDetailsTemplate>
    );
}
