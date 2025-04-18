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
                <div className="flex relative flex-col items-start py-5 pr-4 w-full rounded-3xl aspect-[0.837]">
                    <Image
                        src="https://i.pinimg.com/736x/8a/cd/19/8acd19fd588395f02a2ba0f5e6328a99.jpg"
                        alt="Nike Air Max featured product"
                        width={200}
                        height={500}
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative gap-7 mt-12 ml-4 mr-15">
                        <div className="self-end mt-8 pb-10 pt-1 px-1">
                            <div className="w-full font-semibold">
                                <h2 className="text-2xl text-stone-200">UP YOUR SHOE GAME</h2>
                                <p className="text-sm text-stone-300 text-light">
                                    GritandSole gets you the best of footwears with vast variety of designs
                                    so you shop according to your taste
                                </p>
                            </div>
                            <div className="mt-8 w-28 max-w-full">
                                <Button variant="primary" size="small" onClick={() => window.scrollTo({
                                    top: 600,
                                    left: 0,
                                    behavior: "smooth",
                                })}>
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default HeroSection;
