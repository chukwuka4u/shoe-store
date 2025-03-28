"use client"
import { ProductOrder } from "@/lib/types/ProductOrder";
import { useCartContext } from '@/lib/providers/cart-provider'
import Image from 'next/image'

const CartItemCard = ({ product }: { product: ProductOrder }) => {

    const { image, title, size, quantity, price } = product;
    const { addItem, removeItem, deleteItem } = useCartContext();
    return (
        <div className="flex gap-4 mt-2 w-full">
            <Image
                src={image}
                alt={title}
                className="object-contain overflow-hidden shrink-0 rounded-3xl aspect-square w-[157px]"
            />
            <div className="flex flex-col flex-1 shrink self-start basis-0">
                <div className="w-full font-semibold text-neutral-800">
                    <h3 className="w-full text-base">{title}</h3>
                    <div className="mt-1 w-full text-sm">
                        <p className="opacity-80">you can add notes when you submit order request</p>
                    </div>
                </div>
                <div className="mt-2 text-base font-semibold text-neutral-800">
                    <p className="self-stretch my-auto opacity-80">Size {size}</p>
                    <div className="flex space-evenly self-stretch my-auto opacity-80">
                        <p>
                            Quantity
                        </p>
                        <button arial-lable="decrement" onClick={(e) => {
                            e.preventDefault();
                            console.log(e.isDefaultPrevented())
                            removeItem(product);
                        }}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <p>
                            {quantity}
                        </p>
                        <button arial-lable="increment" onClick={() => {

                            'use client'
                            addItem(product);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <p className="mt-2 text-xl font-semibold text-indigo-500">{price}</p>
                <div className="flex gap-2 items-center self-start mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <button aria-label="Remove item" onClick={() => deleteItem(product)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>


                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard;