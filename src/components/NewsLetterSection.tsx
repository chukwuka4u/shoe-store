"use client";
import React, { useState } from "react";
import Image from 'next/image'

const NewsletterSignup = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter signup logic here
        console.log("Newsletter signup with email:", email);
    };

    return (
        <section className="mt-6 max-w-full w-[358px]">
            <div className="px-4 pt-4 pb-16 w-full bg-indigo-500 rounded-3xl min-h-[340px]">
                <div className="w-full">
                    <div className="w-full font-semibold">
                        <h2 className="text-3xl text-white">
                            Join our KicksPlus Club & get 15% off
                        </h2>
                        <p className="mt-2 text-base text-stone-200">
                            Sign up for free! Join the community.
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex gap-1 items-start mt-6 w-full"
                    >
                        <div className="flex-1 shrink text-base tracking-wide basis-0 min-h-10 text-stone-200">
                            <div className="flex-1 w-full">
                                <div className="flex flex-1 gap-2 items-center px-4 py-2.5 rounded-lg border border-solid border-[color:var(--White,#FFF)] size-full">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email address"
                                        className="flex-1 shrink self-stretch my-auto opacity-75 basis-0 bg-transparent outline-none"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="text-sm font-medium tracking-wide text-white uppercase whitespace-nowrap w-[86px]"
                        >
                            <div className="gap-1 self-stretch px-4 py-3 w-full rounded-lg bg-neutral-800 min-h-10">
                                Submit
                            </div>
                        </button>
                    </form>
                </div>
                <div className="flex flex-col items-end px-9 pb-11 mt-8 max-w-full w-[200px]">
                    <Image
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9397b077088e6eced9af1f330c26ce14599a5b56f6d58221c34e98dd78b06f27?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                        alt="Decoration"
                        className="object-contain overflow-hidden aspect-square w-[17px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default NewsletterSignup;
