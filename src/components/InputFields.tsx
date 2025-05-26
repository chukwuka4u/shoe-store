"use client";
import * as React from "react";

interface InputFieldsProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    required?: boolean;
    type?: string;
    className?: string;
}

function InputField({
    placeholder = "First Name",
    value,
    onChange,
    name,
    required = false,
    type = "text",
    className = "",
}: InputFieldsProps) {
    return (
        <div className="text-base tracking-wide max-w-[358px] text-zinc-500">
            <div className="w-full">
                <div className="relative">
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        placeholder={placeholder}
                        className={`flex-1 w-full px-4 py-4 rounded-lg border border-solid border-[#232321] min-h-12 text-zinc-500 text-base tracking-wide focus:outline-none focus:border-zinc-400 ${className} placeholder:text-zinc-500 placeholder:text-base placeholder:tracking-wide placeholder:pointer-events-none placeholder:transition-all placeholder:duration-200 placeholder:ease-in-out`}
                    />
                </div>
            </div>
        </div>
    );
}
export default InputField;
