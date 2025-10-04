import React from "react";
import { useRouter } from "next/navigation"

const DetailHeader = () => {
    const router = useRouter();
    return (
        <header className="flex gap-10 justify-between items-start p-4 w-full rounded-xl bg-neutral-50 mb-2">
            <button onClick={() => router.back()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

            </button>
        </header>
    );
};

export default DetailHeader;
