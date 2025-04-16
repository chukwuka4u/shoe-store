import React from "react";

interface FilterButtonProps {
    label: string;
    iconUrl: string;
    onClick?: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
    label,
    iconUrl,
    onClick,
}) => {
    return (
        <button
            className="flex flex-col flex-1 shrink justify-center px-4 py-2 rounded-lg basis-0 bg-zinc-100 min-h-9"
            onClick={onClick}
        >
            <div className="flex gap-10 justify-between items-center w-full">
                <span className="self-stretch my-auto text-sm font-semibold text-neutral-800">
                    {label}
                </span>
                <img
                    src={iconUrl}
                    alt={`${label} icon`}
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
            </div>
        </button>
    );
};

export default FilterButton;