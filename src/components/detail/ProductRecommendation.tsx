"use client";
import React from "react";
import Image from 'next/image'

const ProductRecommendations = () => {
    return (
        <section className="w-full max-w-[358px]">
            <div className="flex gap-10 justify-between items-end mt-6 w-full">
                <h2 className="text-2xl font-semibold text-neutral-800">
                    You may also like
                </h2>
                <div className="flex gap-2 items-center">
                    <button
                        className="self-stretch my-auto w-8 rotate-[3.141592653589793rad]"
                        aria-label="Previous product"
                    >
                        <div className="flex gap-1 justify-center items-center px-2 w-8 h-8 rounded-lg bg-neutral-800 min-h-8">
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b058b8a4bc504523dea1ff1da29b2caacff623e2098b12280b694f4d28aaedfd?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                                alt="Previous"
                                className="object-contain overflow-hidden self-stretch my-auto w-4 aspect-square"
                            />
                        </div>
                    </button>
                    <button
                        className="self-stretch my-auto w-8 rotate-[-3.469446951953614e-18rad]"
                        aria-label="Next product"
                    >
                        <div className="flex gap-1 justify-center items-center px-2 w-8 h-8 rounded-lg bg-neutral-800 min-h-8">
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6f1237365a5b73216a27db3fb750ebc0f2f16bcdc3f6da103b7b37c106ccc6f?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                                alt="Next"
                                className="object-contain overflow-hidden self-stretch my-auto w-4 aspect-square"
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/*<div className="flex gap-4 items-start mt-6 max-w-full w-[358px]">
                 <ProductCard
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/622fa21cbe756e85f0b861750b41b726d1b52fd93935003a5dc34748aec313d7?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                    title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                    price={125}
                    isNew={true}
                />
                <ProductCard
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/60b6e180c7cda6f8cd85ec5edaaee0f1ba9f7af280893a67258ba957dc7f7b2a?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                    title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                    price={125}
                    isNew={true}
                />
            </div>

            <div className="flex gap-4 items-start mt-6 max-w-full w-[358px]">
                <ProductCard
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/4847fb7d6650139650af6818322650b940643ae1a46617528128a39709d11e30?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                    title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                    price={125}
                    isNew={true}
                />
                <ProductCard
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/9f914bfeca4cddff7754fee39ad91fb5695336f438b78ce3e691c6302027317b?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                    title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                    price={125}
                    isNew={true}
                />
            </div> */}

            <div className="flex gap-1 items-start mt-6">
                <div className="flex shrink-0 w-8 h-1 bg-indigo-500 rounded-lg" />
                <div className="flex shrink-0 w-8 h-1 rounded-lg bg-neutral-800 bg-opacity-30" />
                <div className="flex shrink-0 w-8 h-1 rounded-lg bg-neutral-800 bg-opacity-30" />
                <div className="flex shrink-0 w-8 h-1 rounded-lg bg-neutral-800 bg-opacity-30" />
            </div>
        </section>
    );
};

export default ProductRecommendations;
