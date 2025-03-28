import React from "react";
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="overflow-hidden relative px-4 pt-6 pb-28 w-full rounded-3xl bg-neutral-800 min-h-[720px] mt-6 max-w-[358px]">
            <div className="z-0 w-full font-semibold">
                <h2 className="text-2xl text-orange-400">About us</h2>
                <p className="mt-1 text-base text-stone-200">
                    We are the biggest hyperstore in the universe. We got you all cover
                    with our exclusive collections and latest drops.
                </p>
            </div>

            <div className="flex z-0 flex-col items-start mt-10 w-full">
                <div className="flex flex-col font-semibold whitespace-nowrap">
                    <h3 className="text-xl text-orange-400">Categories</h3>
                    <nav className="self-start mt-4 text-base text-stone-200">
                        <ul>
                            <li>
                                <a href="#">Loafers</a>
                            </li>
                            <li className="mt-2">
                                <a href="#">Sneakers</a>
                            </li>
                            <li className="mt-2">
                                <a href="#">Basketball</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex flex-col mt-6 font-semibold whitespace-nowrap">
                    <h3 className="text-xl text-orange-400">Company</h3>
                    <nav className="self-start mt-4 text-base text-stone-200">
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li className="mt-2">
                                <a href="#">Contact</a>
                            </li>
                            <li className="mt-2">
                                <a href="#">Blogs</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-orange-400">Follow us</h3>
                    <div className="flex gap-4 items-start mt-4">
                        <a href="#" aria-label="Facebook">
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/72259d3c6efb4b34f0aa2a68430881508cee28bf51b08d6bde3f49f5635dccac?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                                width={100}
                                height={100}
                                alt="Facebook"
                                className="object-contain overflow-hidden shrink-0 w-6 aspect-square"
                            />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e4f34e4700a3762da71168e40d7545f5acb45b316d5ffa8d3fa4983c8968c8?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                                width={100}
                                height={100}
                                alt="Twitter"
                                className="object-contain overflow-hidden shrink-0 w-6 aspect-square"
                            />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/266801fafefbb897c536c0c782f04be3a64727b06bea1542470ed8553cec8e6b?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                                width={100}
                                height={100}
                                alt="Instagram"
                                className="object-contain overflow-hidden shrink-0 w-6 aspect-square"
                            />
                        </a>
                        <a href="#" aria-label="YouTube">
                            <Image
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa24a7f420f15814a51f35e3d555027a938b9fe65a18c6b40d4cada5dfb78801?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                                width={100}
                                height={100}
                                alt="YouTube"
                                className="object-contain overflow-hidden shrink-0 w-6 aspect-square"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b50b1e84a77a8effffd412fe8f1ed111a064933e9a295e12fc18ff431cce0bb?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                width={100}
                height={100}
                alt="Footer decoration"
                className="object-contain overflow-hidden absolute bottom-0 z-0 aspect-square h-[89px] right-[-3px] w-[358px]"
            />
        </footer>
    );
};

export default Footer;
