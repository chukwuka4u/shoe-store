"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from 'next/navigation'
import { useCartContext } from '@/lib/providers/cart-provider'
import CartHeader from "./cart/CartHeader";
import Drawer from "./drawer/Drawer";
import Image from "next/image"
import logo from "assets/group_10.png"


const Header = () => {
    const router = useRouter();
    const { cartItems } = useCartContext();
    const [open, setOpen] = useState(false)

    return (
        <>
            <header className="flex justify-between items-center p-3 w-full rounded-xl bg-neutral-50 mb-2">
                <button onClick={() => { setOpen(true); console.log("clicked") }}>
                    <div className="flex flex-row text-sm font-semibold whitespace-nowrap text-neutral-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.8" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </button>
                <button className="pl-5" onClick={() => router.push('/')}>
                    <Image
                        src={logo}
                        width={100}
                        height={100}
                        alt="logo"
                        className="object-contain h-[40px]"
                    />
                </button>
                <div className="flex flex-row gap-2">
                    <button onClick={() => router.push("/cart")}>
                        <div className="flex flex-row text-sm font-semibold whitespace-nowrap text-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.8" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>

                            {cartItems && (cartItems.length > 0) && (
                                <div className="pl-1 text-[12px] w-4 h-4 min-h-2 rounded-[32px]">
                                    {cartItems.length}
                                </div>
                            )}
                        </div>
                    </button>
                    <button onClick={() => router.push("/how_to")}>
                        <div className="flex flex-row text-sm font-semibold whitespace-nowrap text-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.8" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                    </button>
                </div>
            </header>
            <Drawer open={open} setOpen={setOpen} />
        </>
    );
};

const MainHeader = () => {
    const pathname = usePathname();

    return (
        <>
            {pathname === '/cart' ? <CartHeader /> : <Header />}
        </>
    )
}

export default MainHeader;