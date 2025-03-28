import React from "react";
import Button from "../Button"
import Image from 'next/image'

const HeroSection: React.FC = () => {
    return (
        <header>
            <h1 className="text-6xl font-bold uppercase text-neutral-800 text-center">
                Do it <span style={{ color: "rgba(74,105,226,1)" }}>right</span>
            </h1>
            <div className="mt-6 w-full">
                <div className="flex relative flex-col items-start py-5 pr-4 w-full rounded-3xl aspect-[0.937]">
                    <Image
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f6f8c4211b803f0fba39961bf46ee564caf5824ccfcab28c620ab470d49040e?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                        alt="Nike Air Max featured product"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative gap-7 mt-12 ml-4">
                        <div className="self-end mt-8">
                            <div className="w-full font-semibold">
                                <h2 className="text-2xl text-white">UP YOUR SHOE GAME</h2>
                                <p className="text-sm text-stone-200">
                                    Steeze introducing the best of men shoes, comfort and style
                                </p>
                            </div>
                            <div className="mt-2 w-28 max-w-full">
                                <Button variant="primary" size="small">
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd3927985a56c17c7ab7e2a3577fecaca660cdcf7a0baf52c4869e476eb74439?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                                alt="Nike shoe thumbnail 1"
                                className="object-contain w-16 aspect-square"
                            />
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/84d088bc3e1ed982850edfa6346200a401b5f23ae2eff225662693626dbfc958?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                                alt="Nike shoe thumbnail 2"
                                className="object-contain mt-2 w-16 aspect-square"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
