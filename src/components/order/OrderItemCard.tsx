import React from "react";
import Image from 'next/image'
import { ProductOrder } from "@/lib/types/ProductOrder"

const OrderItemCard: React.FC<ProductOrder> = (params) => {
    return (
        <article className="flex-1 shrink basis-0 bg-white/50 rounded-xl">
            <div className="flex relative gap-2.5 px-1 pt-1 w-full text-xs font-semibold text-white whitespace-nowrap rounded-2xl bg-neutral-50 min-h-[180px]">
                <Image
                    src={params.image}
                    alt={params.title}
                    width={100}
                    height={100}
                    className="object-cover z-0 flex-1 shrink rounded-xl aspect-[0.8] basis-4 w-[150px]"
                />
                {/* {label &&
                    <div
                        className={`absolute top-2 left-2 z-0 gap-2.5 self-start px-2 py-1 ${labelColor} rounded-xl`}
                    >
                        {label}
                    </div>
                } */}
            </div>
            <div className="mt-4 w-full px-2">
                <h3 className="text-base font-semibold text-neutral-800">{params.title}</h3>
                <div className="flex flex-row justify-between">
                    <h3>SIZE <span className="text-2xl" style={{ color: "rgba(255,165,47,1)" }}>{params.size}</span></h3>
                    <h3>QUANTITY <span className="text-2xl" style={{ color: "rgba(255,165,47,1)" }}>{params.quantity}</span></h3>
                </div>
            </div>

        </article>
    );
};
export default OrderItemCard;
