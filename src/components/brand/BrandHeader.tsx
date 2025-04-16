import Image, { StaticImageData } from "next/image";
import React from "react";

interface PromoBannerProps {
    backgroundImageUrl: string | StaticImageData;
    tagline: string;
    title: string;
    description: string;
}

const BrandHeader: React.FC<PromoBannerProps> = ({
    backgroundImageUrl,
    tagline,
    title,
    description,
}) => {
    return (
        <section className="flex relative flex-col items-start px-4 pt-11 pb-4 w-full rounded-2xl aspect-[2.403]">
            <Image
                src={backgroundImageUrl}
                width={200}
                height={200}
                alt="Promotional background"
                className="object-cover absolute inset-0 size-full rounded-2xl"
            />
            <div className="relative max-w-full w-[213px]">
                <div className="w-full">
                    <p className="text-xs text-stone-200">{tagline}</p>
                    <h2 className="text-xl font-semibold text-white">{title}</h2>
                </div>
                <p className="mt-1 text-xs text-stone-200">{description}</p>
            </div>
        </section>
    );
};

export default BrandHeader;