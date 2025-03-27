import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "medium",
    onClick,
}) => {
    const baseClasses =
        "gap-1 self-stretch w-full rounded-lg text-xs font-medium tracking-wide text-white uppercase";

    const variantClasses = {
        primary: "bg-indigo-500",
        secondary: "bg-neutral-800",
    };

    const sizeClasses = {
        small: "px-4 py-2 min-h-8",
        medium: "px-4 py-3 min-h-10",
        large: "px-4 py-3.5 min-h-10",
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
