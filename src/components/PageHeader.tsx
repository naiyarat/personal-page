import React from "react";
import { Icon } from "./Icon";
import { siGithub, siInstagram } from "simple-icons";

export const PageHeader = () => {
    return (
        <div className="flex items-center sticky top-0 text-white z-99 bg-gradient-to-r from-neutral-900 to-[#182430] w-full h-10 p-2">
            <p className="font-light text-zinc-200">Naiyarat Hanmatheekuna</p>

            <div className="flex space-x-3 ml-auto pr-2">
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon={siGithub} size={24} color="white" />
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon={siInstagram} size={24} color="white" />
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon={siInstagram} size={24} color="white" />
                </a>
                <p className="text-white">resume</p>
            </div>
        </div>
    );
};
