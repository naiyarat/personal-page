import React from "react";

export const Role = ({ name, role }: { name: string; role: string }) => {
    return (
        <p className="text-neutral-400 font-extralight">
            {name} &bull; {role}
        </p>
    );
};
