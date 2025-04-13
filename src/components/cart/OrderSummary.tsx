import React, { useEffect, useState } from "react";
import { useCartContext } from '@/lib/providers/cart-provider'
import { setMaxIdleHTTPParsers } from "http";
import MyModal from "../order/modal";

interface OrderSummaryProps {
    items: number;
    itemsTotal: string;
    delivery: string;
    tax: string;
    total: string;
}

const OrderSummary: React.FC = () => {

    const { getTotQuantnPrice, cartItems, submitOrder } = useCartContext();
    const [totalPrice, setTotalPrice] = useState<number>();
    const [totalQuantity, setTotalQuantity] = useState<number>(1000);
    const [orderId, setOrderId] = useState<string>()

    useEffect(() => {
        const [quantity, price] = getTotQuantnPrice();
        console.log("the total price is " + price)
        setTotalQuantity(quantity);
        setTotalPrice(price)
    }, [cartItems])

    return (
        <section className="p-4 mt-6 max-w-full text-base font-semibold rounded-2xl bg-neutral-50 text-neutral-800 w-[358px]">
            <h2 className="text-xl">Order Summary</h2>
            <div className="mt-4 w-full">
                <div className="flex gap-10 justify-between items-start w-full">
                    <p>{totalQuantity} Pair(s) of Shoes</p>
                    <p className="opacity-80">#{totalPrice}</p>
                </div>
                <div className="flex gap-10 justify-between items-start mt-4 w-full">
                    <p>Delivery</p>
                    <p className="opacity-80">#1000</p>
                </div>
                <div className="flex gap-10 justify-between items-start mt-4 w-full">
                    <p>Sales Tax</p>
                    <p className="opacity-80">-none-</p>
                </div>
                <div className="flex gap-10 justify-between items-start mt-4 w-full text-xl whitespace-nowrap">
                    <p>Total</p>
                    <p className="opacity-80">N{totalPrice ? Number(totalPrice) + 1000 : 0.00}</p>
                </div>
            </div>
            <button className="mt-4 w-full text-sm font-medium tracking-wide text-white uppercase whitespace-nowrap" onClick={async () => {
                const v = await submitOrder()
                v && setOrderId(v)
            }}>
                <div className="self-stretch p-4 w-full rounded-lg bg-neutral-800 min-h-12">
                    Checkout
                </div>
            </button>
            {
                orderId && <MyModal id={orderId} />
            }
            {/* <button className="mt-4 underline decoration-auto decoration-solid underline-offset-auto">
                User a promo code
            </button> */}
        </section>
    );
};

export default OrderSummary;
