"use client";
import type { ShoeSizes } from "@/lib/types/ShoeSizes";
import React, { Dispatch, SetStateAction, useState } from "react";

const SizeSelector = ({ setSize }: { setSize: Dispatch<SetStateAction<ShoeSizes>> }) => {
    const [selectedSize, setSelectedSize] = useState("38");

    const sizes: ShoeSizes[] = [
        39, 40, 41, 42, 43, 44, 45
    ];

    const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
        const str = parseInt(size, 10) as SetStateAction<ShoeSizes>
        setSize(str)
    };

    const getSizeButtonClasses = (size: string) => {
        if (size === selectedSize) {
            return "w-12 text-white";
        } else {
            return "w-12 hover:w-12 text-neutral-400";
        }
    };

    const getSizeButtonStyleClasses = (size: string) => {
        if (size === selectedSize) {
            return "gap-1 self-stretch pr-3.5 pl-4 w-12 h-12 rounded-lg bg-neutral-800 min-h-12 flex items-center justify-center";
        } else if (["39", "40"].includes(size)) {
            return "gap-1 self-stretch px-4 w-12 h-12 rounded-lg bg-neutral-300 min-h-12 flex items-center justify-center";
        } else {
            return "gap-1 self-stretch px-4 w-12 h-12 bg-white rounded-lg min-h-12 flex items-center justify-center";
        }
    };

    return (
        <section className="z-0 mt-6 w-full text-neutral-800">
            <div className="flex gap-10 justify-between items-start w-full">
                <h2 className="text-base font-semibold">Size</h2>
                <button className="text-sm font-medium tracking-wide underline underline uppercase decoration-auto decoration-solid underline-offset-auto">
                    Size chart
                </button>
            </div>
            <div className="mt-2 w-full text-sm font-medium tracking-wide uppercase whitespace-nowrap">
                <div className="flex gap-2 items-start w-full">
                    {sizes.map((size) => (
                        <div key={size} className={getSizeButtonClasses(size.toString())}>
                            <button
                                className={getSizeButtonStyleClasses(size.toString())}
                                onClick={() => handleSizeSelect(size.toString())}
                                aria-pressed={size.toString() === selectedSize}
                            >
                                {size}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SizeSelector;
