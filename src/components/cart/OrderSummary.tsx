import React from "react";
import { useCartContext } from '@/lib/providers/cart-provider'

interface OrderSummaryProps {
    items: number;
    itemsTotal: string;
    delivery: string;
    tax: string;
    total: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
    items,
    itemsTotal,
    delivery,
    tax,
    total,
}) => {

    const { submitOrder } = useCartContext();

    return (
        <section className="p-4 mt-6 max-w-full text-base font-semibold rounded-2xl bg-neutral-50 text-neutral-800 w-[358px]">
            <h2 className="text-xl">Order Summary</h2>
            <div className="mt-4 w-full">
                <div className="flex gap-10 justify-between items-start w-full">
                    <p>{items} ITEM</p>
                    <p className="opacity-80">{itemsTotal}</p>
                </div>
                <div className="flex gap-10 justify-between items-start mt-4 w-full">
                    <p>Delivery</p>
                    <p className="opacity-80">{delivery}</p>
                </div>
                <div className="flex gap-10 justify-between items-start mt-4 w-full">
                    <p>Sales Tax</p>
                    <p className="opacity-80">{tax}</p>
                </div>
                <div className="flex gap-10 justify-between items-start mt-4 w-full text-xl whitespace-nowrap">
                    <p>Total</p>
                    <p className="opacity-80">{total}</p>
                </div>
            </div>
            <button className="mt-4 w-full text-sm font-medium tracking-wide text-white uppercase whitespace-nowrap" onClick={() => submitOrder()}>
                <div className="self-stretch p-4 w-full rounded-lg bg-neutral-800 min-h-12">
                    Checkout
                </div>
            </button>
            <button className="mt-4 underline decoration-auto decoration-solid underline-offset-auto">
                User a promo code
            </button>
        </section>
    );
};

export default OrderSummary;
