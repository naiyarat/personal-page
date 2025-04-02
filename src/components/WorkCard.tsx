import React from "react";

interface WorkCardProps {
    title: string;
}

export const WorkCard = ({ title }: WorkCardProps) => {
    return (
        <>
            <div className="bg-gray-500 w-full h-[50vh] rounded-2xl">
                <div className="flex flex-col">
                    <h1>{title}</h1>
                </div>
                {/* <button className="transform -translate-y-1/2">
                <ChevronRight className="w-8 h-8 text-white" />
            </button> */}
            </div>
        </>
    );
};
