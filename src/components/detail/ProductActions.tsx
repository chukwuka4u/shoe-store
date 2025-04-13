"use client";
import React from "react";
import { useCartContext } from "@/lib/providers/cart-provider"
import { ProductOrder } from "@/lib/types/ProductOrder";

const ProductActions = ({ product }: { product: ProductOrder }) => {

    const { addItem } = useCartContext();

    const handleAddToCart = (item: ProductOrder) => {
        alert("successfully added item to cart 😊")
        addItem(item)
    };

    return (
        <section className="z-0 mt-6 w-full">
            <div className="flex gap-2 items-start w-full">
                <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 shrink text-sm font-medium tracking-wide text-white uppercase basis-0 min-w-60"
                >
                    <div className="gap-1 self-stretch p-4 w-full rounded-lg bg-neutral-800 min-h-12">
                        Add to cart
                    </div>
                </button>
            </div>
            <div className="pt-1 text-sm text-neutral-800 text-base">
                <span className="float-left">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>

                </span>
                You can increase the quantity of pairs in cart </div>
        </section>
    );
};

export default ProductActions;
