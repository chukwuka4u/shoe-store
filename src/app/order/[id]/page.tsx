"use client"
import OrderItemCard from "@/components/order/OrderItemCard";
import { getOrder, fulfilled } from "@/lib/config/firebase/app";
import { ProductOrder } from "@/lib/types/ProductOrder";
import { useParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

export default function Order() {
    const params = useParams<{ id: string }>()

    const [products, setProducts] = useState<ProductOrder[] | null>(null)
    const [filled, setFilled] = useState<boolean | undefined>(undefined);
    useEffect(
        () => {
            (async () => {
                const lst: unknown = await getOrder(params.id)
                console.log(lst)
                const { data, productList } = lst as { data: { fulfilled: boolean }, productList: ProductOrder[] }
                console.log(data)
                console.log(productList)
                setFilled(data.fulfilled)
                setProducts(productList)
            })()
        }, [])
    useEffect(
        () => {
            (async () => {
                await fulfilled(params.id)
            })()
        }
        , [filled])

    return (
        <section className="w-full">
            <div className="flex flex-col items-center mt-6 w-full">
                {products ? products.map((product, index) => (
                    <OrderItemCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        size={product.size}
                        quantity={product.quantity}
                    />
                ))
                    :
                    <div>LOADING...</div>
                }
            </div>
            <div className="fixed bottom-0 w-screen bg-white p-1 z-10 rounded-t-2xl shadow-xl">
                <div className="pt-2">FOR STAFF ONLY ⬇️</div>
                <div className="flex flex-row justify-between">
                    <h3>FULFILLED --</h3>
                    <button className="rounded-full border-1 hover:bg-slate-500" onClick={(() => setFilled(true))}>
                        {
                            filled ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                        }
                    </button>
                </div>
            </div>
        </section>
    );
}