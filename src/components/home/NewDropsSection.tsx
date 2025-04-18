"use client"
import React from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";

const NewDropsSection: React.FC = () => {
    const router = useRouter();
    return (
        <section className="flex gap-7 justify-between items-center self-stretch mt-6 w-full">
            <h2 className="my-auto text-2xl font-semibold text-neutral-800 w-[172px]">
                Don&apos;t miss out on new drops
            </h2>
            <div className="self-stretch my-auto w-[157px]">
                <Button variant="primary" size="medium" onClick={() => router.push('/new')}>
                    Shop new drops
                </Button>
            </div>
        </section>
    );
};

export default NewDropsSection;
