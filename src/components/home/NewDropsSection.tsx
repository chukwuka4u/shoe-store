"use client"
import React from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";

const NewDropsSection: React.FC = () => {
    const router = useRouter();
    return (
        <section className="flex gap-7 justify-between items-center self-stretch mt-6 w-full">
            <p className="my-auto text-lg font-semibold text-neutral-800 w-[172px] bg-transparent">
                125 in store
            </p>
            <div className="self-stretch my-auto w-[157px]">
                <Button variant="primary" size="small" onClick={() => router.push('/new')}>
                    Shop new drops
                </Button>
            </div>
        </section>
    );
};

export default NewDropsSection;
