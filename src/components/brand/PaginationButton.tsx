import React from "react";

interface PaginationButtonProps {
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
    children,
    active = false,
    onClick,
}) => {
    const baseClasses =
        "self-stretch px-4 py-2 w-full rounded-lg min-h-8 text-sm font-medium tracking-wide uppercase";
    const activeClasses = "bg-neutral-800 text-white";
    const inactiveClasses =
        "border border-solid border-[#232321] text-neutral-800";

    return (
        <button
            className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default PaginationButton;