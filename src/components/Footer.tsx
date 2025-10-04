import React from "react";
import Image from 'next/image'
import pinterestlogo from "assets/pinterest_logo.jpg"
import instagramlogo from "assets/instagram_logo.png"
import whatsapplogo from "assets/whatsapp_logo.jpg"

const Footer = () => {
    return (
        <footer className="overflow-hidden w-full px-4 pt-4 pb-28 rounded-3xl bg-neutral-800 min-h-[720px] mt-6 max-w-[480px]">
            {/* <div className="z-0 w-full font-medium">
                <h2 className="text-2xl text-orange-400">About us</h2>
                <p className="mt-1 text-base text-stone-200">
                    we are a retail brand dedicated to serving all your footwear needs, we offer branded loafers and sneakers
                    of brands like gucci, prada, nike, adidas and others. check the menu to view all brands. all orders are met within 7 days.
                    delivery is currently only in port harcourt and owerri.
                </p>
            </div> */}

            <div className="flex z-0 flex-col items-start mt-10 w-full">
                <div className="flex flex-col font-medium whitespace-nowrap">
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

                <div className="flex flex-col mt-6 font-medium whitespace-nowrap">
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
                            <li className="mt-2">
                                <a href="/privacy">Privacy Policy</a>
                            </li>
                            <li className="mt-2">
                                <a href="/how_to">How to Use the Store</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-medium text-orange-400">Follow us</h3>
                    <div className="flex gap-4 items-start mt-4">
                        <a href="https://www.pinterest.com/chukwukagns/" aria-label="Pinterest">
                            <Image
                                src={pinterestlogo}
                                width={100}
                                height={100}
                                alt="Pinterest"
                                className="object-cover overflow-hidden shrink-0 w-6 aspect-square rounded-full"
                            />
                        </a>
                        <a href="https://www.instagram.com/gritandsoleshoes?igsh=YzljYTk1ODg3Zg==" aria-label="Instagram">
                            <Image
                                src={instagramlogo}
                                width={100}
                                height={100}
                                alt="Instagram"
                                className="object-cover overflow-hidden shrink-0 w-6 aspect-square rounded-full"
                            />
                        </a>
                        <a href="https://chat.whatsapp.com/GcoGPuB6aeeCF3sDA6bZ9L" aria-label="WhatsApp">
                            <Image
                                src={whatsapplogo}
                                width={100}
                                height={100}
                                alt="WhatsApp"
                                className="object-cover overflow-hidden shrink-0 w-6 aspect-square rounded-full"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
