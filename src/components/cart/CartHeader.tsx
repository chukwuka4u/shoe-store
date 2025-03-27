import React from "react";
import { useRouter } from "next/navigation"

const CartHeader = () => {
    const router = useRouter();
    return (
        <header className="flex gap-10 justify-between items-start p-4 w-full rounded-xl bg-neutral-50">
            <div className="flex gap-10 items-start">

                <p>Steeze</p>
                <div className="flex shrink-0 w-20 h-5" />
            </div>
            <button onClick={() => router.back()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </header>
    );
};

export default CartHeader;
