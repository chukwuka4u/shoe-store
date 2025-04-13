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
            <header className="flex gap-10 justify-between items-center p-3 w-full rounded-xl bg-neutral-50 mb-2">
                <button onClick={() => { setOpen(true); console.log("clicked") }}>
                    <div className="flex flex-row text-sm font-semibold whitespace-nowrap text-neutral-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </button>
                <button className="px-auto" onClick={() => router.push('/')}>
                    <Image
                        src={logo}
                        width={100}
                        height={100}
                        alt="logo"
                        className="object-contain h-[40px]"
                    />
                </button>
                <button onClick={() => router.push("/cart")}>
                    <div className="flex flex-row text-sm font-semibold whitespace-nowrap text-neutral-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        {cartItems && (cartItems.length > 0) && (
                            <div className="pl-1 text-[12px] w-4 h-4 min-h-2 rounded-[32px]">
                                {cartItems.length}
                            </div>
                        )}
                    </div>
                </button>
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