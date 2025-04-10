import React from 'react';
import { WorkDetailsTemplate } from '../components/WorkDetailsTemplate';
import { SectionCard } from '@/components/Card/SectionCard';
import { SectionContent } from '@/components/Section/SectionContent';
import { Role } from '@/components/Section/Role';
import { projectDirectoryItems } from '../components/ProjectDirectoryItems';

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
            <SectionCard bgColor="fuchsia-500/20">
                {/* overview */}
                <div
                    className="flex w-full text-neutral-400 text-base space-x-4"
                    id="overview"
                >
                    <SectionContent width="68%" title="Overview">
                        <p>
                            Silverspoon is a web and mobile application that
                            allows restaurants to manage their business
                            operations. It is a comprehensive{' '}
                            <span className="text-neutral-100">
                                ERP (Enterprise Resource Planning)
                            </span>{' '}
                            system that includes modules for{' '}
                            <span className="text-neutral-100">
                                inventory management
                            </span>
                            , <span className="text-neutral-100">sales</span>,
                            and{' '}
                            <span className="text-neutral-100">
                                POS systems
                            </span>
                            . Our goal is to help restaurant owners manage their
                            restaurant resources easily and efficiently.
                            <br />
                            <br />I created the first prototype of the system,
                            which was able to automatically calculate{' '}
                            <span className="text-neutral-100">
                                replenishment data
                            </span>{' '}
                            from importing data through excel. After testing,
                            Silverspoon&apos;s value was clear, and a full
                            system was the obvious next step.
                            <br />
                            <br /> During my time at Silverspoon, I built the
                            core ERP system . I was responsible for both{' '}
                            <span className="text-neutral-100">
                                front and back end development
                            </span>{' '}
                            of over{' '}
                            <span className="text-fuchsia-100">
                                30+ primary modules
                            </span>{' '}
                            such as{' '}
                            <span className="text-fuchsia-100">
                                SKU Management
                            </span>
                            ,
                            <span className="text-fuchsia-100">
                                Category/Subcategory
                            </span>
                            ,{' '}
                            <span className="text-fuchsia-100">
                                Waste Management
                            </span>
                            , and more.
                        </p>
                    </SectionContent>
                    <div className="flex flex-col space-y-6 w-[32%]">
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
                        <SectionContent title="Project Type & Status">
                            <p className="text-purple-200">
                                B2B Product - Deployed
                            </p>
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
                    <SectionContent width="60%">
                        <div className="flex flex-col justify-center items-center mt-[10%] mr-4 text-neutral-100 font-bold text-3xl">
                            <p className="text-purple-200 mb-3">
                                Millions of baht
                            </p>{' '}
                            <p>lost in a month</p>
                        </div>
                    </SectionContent>
                    <SectionContent title="Painpoint">
                        <p className="">
                            My father’s restaurant,{' '}
                            <span className="text-fuchsia-200">Kofuku</span>
                            , lost millions in just one month due to the sudden
                            Covid-19 lockdowns, encountering inefficient
                            inventory management problems.
                            <br />
                            <br />
                            The existing POS (point-of-sale) systems required
                            manual input of each recipe&apos;s ingredients for
                            stock tracking, incredibly time-consuming with{' '}
                            <span className="text-neutral-200">
                                thousands of items
                            </span>
                            . Additionally, these systems lacked automated
                            stock-replenishment, forcing employees to compare
                            menu items with recipes{' '}
                            <span className="text-neutral-200">manually</span>
                            —an inaccurate and troublesome process.
                        </p>
                    </SectionContent>
                </div>
            </SectionCard>

            <SectionCard bgColor="fuchsia-500/20">
                {/* my role */}
                <div
                    className="flex w-full text-neutral-400 text-base"
                    id="solution"
                >
                    <SectionContent title="The Solution">
                        <p>
                            Therefore, utilizing{' '}
                            <span className="text-fuchsia-200">Python</span> and{' '}
                            <span className="text-fuchsia-200">Flask</span>, I
                            created a basic prototype which compares Excel files
                            with sales data in order to auto-calculate how much
                            inventory should be bought. This allowed stock to be
                            purchased more frequently and accurately, greatly{' '}
                            <span className="text-neutral-200">
                                reducing waste
                            </span>
                            ,{' '}
                            <span className="text-neutral-200">
                                improving cash flow
                            </span>
                            , and{' '}
                            <span className="text-neutral-200">
                                reducing cost
                            </span>
                            .
                            <br />
                            <br />
                            The prototype was well received, and I teamed
                            up(basically learned under) with my cousin and his
                            friends to build the a system which would entail the
                            necessities of an{' '}
                            <span className="text-neutral-200">ERP</span>. With
                            our fullscale application, employees are able to
                            count stock through our mobile web, and admins
                            control critical processes such as purchasing and
                            waste management through the desktop version.
                        </p>
                    </SectionContent>
                </div>
            </SectionCard>

            <SectionCard bgColor="fuchsia-500/20">
                {/* my role */}
                <div
                    className="flex w-full text-neutral-400 text-base"
                    id="keyChallenges"
                >
                    <SectionContent title="Key Challenges">
                        <p>
                            I quickly realized that the hardest part about the
                            project wasn&apos;t actually tech; it was{' '}
                            <span className="text-neutral-200">
                                understanding user-needs and adapting tech
                                accordingly
                            </span>
                            . The flow of a professional kitchen is extremely
                            sophisticated. we had to shadow the employees,
                            studying every inch of their work process, trying to
                            empathize with their pain points to create a fitting
                            solution.
                        </p>
                    </SectionContent>
                    <SectionContent width="60%">
                        <div className="flex flex-col justify-center items-center mt-[10%] ml-4 text-neutral-100 font-bold text-3xl">
                            <div>
                                <p className="text-fuchsia-200 mb-3">
                                    Communication
                                </p>
                                <p className="">is the key</p>
                            </div>
                        </div>
                    </SectionContent>
                </div>
                <SectionContent>
                    <p className="text-neutral-400 text-base pt-4">
                        Our first version was good in theory, but it was too
                        detailed and tedious for employees in the kitchen. Our
                        workflow focused too much on controlling the data
                        precisely; this made it difficult for actual use in the
                        midst of a chaotic and fast-paced kitchen environment,
                        where users understandably do not have the time to
                        accurately input data during work.
                    </p>
                </SectionContent>
                <SectionContent>
                    <p className="text-neutral-400 text-base pt-4">
                        Many issues similiar to this arose, where an idea was{' '}
                        <span className="text-neutral-200">
                            viable in theory but not in practice
                        </span>
                        , regardless of how much time was spent planning with
                        our restaurant partner. Consequently, it was evident to
                        me that these issues were common in software projects
                        (especially for such complicated workflows), and our
                        team did our best to push through and improve iterations
                        until a viable product was created.
                    </p>
                </SectionContent>
            </SectionCard>
            <SectionCard bgColor="fuchsia-500/20">
                {/* learned insights */}
                <div
                    className="flex flex-col w-full text-neutral-400 text-base space-y-4"
                    id="learnedInsights"
                >
                    <SectionContent title="Learned Insights">
                        <p>
                            Working with Silverspoon was my first experience
                            working with real world professionals. The
                            environment was extremely welcoming, and I was able
                            to learn and improve my skills both as a programmer
                            and team member with amazing people.
                        </p>
                    </SectionContent>
                    <div className="flex space-x-2 w-full pt-4">
                        <SectionContent title="Technical Skills" width="50%">
                            <p>
                                I learned about the industry standard tools of
                                website development. I understood how to utilize{' '}
                                <span className="text-purple-200">
                                    MERN (Mongo, Express, React, Node)
                                </span>
                                , as well as the best practices for{' '}
                                <span className="text-neutral-200">
                                    server/client-side design
                                </span>
                                , and about the importance of finding the right
                                balance of attributes depending on specific
                                usecases.
                            </p>
                        </SectionContent>
                        <SectionContent title="Team Skills" width="50%">
                            <p>
                                I learned about the importance of{' '}
                                <span className="text-neutral-200">
                                    good documentation
                                </span>
                                , delegating{' '}
                                <span className="text-neutral-200">
                                    clear tasks
                                </span>{' '}
                                and writing{' '}
                                <span className="text-neutral-200">
                                    proper usecases
                                </span>{' '}
                                with tools such as{' '}
                                <span className="text-purple-200">
                                    Confluence
                                </span>{' '}
                                and{' '}
                                <span className="text-purple-200">Jira</span>.
                                Through{' '}
                                <span className="text-neutral-200">
                                    weekly sync-ups
                                </span>
                                , I understood the strength of the team being on
                                the same page, as well as polite communication
                                and a determined collective spirit.
                            </p>
                        </SectionContent>
                    </div>
                </div>
            </SectionCard>
            <SectionCard bgColor="fuchsia-500/20">
                {/* conclusion */}
                <div
                    className="flex w-full text-neutral-400 text-base"
                    id="conclusion"
                >
                    <SectionContent title="Conclusion">
                        <p>
                            The lessons from skilled seniors, technical
                            know-hows, and perspective I absorbed from
                            Silverspoon were incredible. Being able build a real
                            product and create real world value through
                            Silverspoon was truly a powerful and fun learning
                            experience, and it was through this project I knew
                            my interest lie in{' '}
                            <span className="text-neutral-200">
                                blending technology and entrepreneurship
                            </span>{' '}
                            .
                        </p>
                    </SectionContent>
                </div>
            </SectionCard>
        </WorkDetailsTemplate>
    );
}
