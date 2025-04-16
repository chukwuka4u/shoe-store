import React from "react";

interface SectionHeaderProps {
    title: string;
    itemCount: number;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, itemCount }) => {
    return (
        <header className="w-full font-semibold text-neutral-800">
            <h1 className="text-xl">{title}</h1>
            <p className="text-sm opacity-80">{itemCount} items</p>
        </header>
    );
};

export default SectionHeader;