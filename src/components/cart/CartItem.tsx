"use client"
import React from "react";
import { useCartContext } from "@/lib/providers/cart-provider"
import CartItemCard from "./CartItemCard";


const CartItem: React.FC = () => {

    const { cartItems } = useCartContext()

    return (
        <article className="p-4 mt-6 w-full rounded-2xl bg-neutral-50 max-w-[358px]">
            <h2 className="w-full text-xl font-semibold text-neutral-800">
                Your Bag
            </h2>
            <p className="mt-2 text-sm opacity-80 text-neutral-800">
                Items in your bag not reserved- check out now to make them yours.
            </p>
            <div>
                {
                    cartItems?.map((i, index) =>
                        <CartItemCard key={index} product={i} />
                    )
                }
            </div>
        </article>
    );
};

export default CartItem;
