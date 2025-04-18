import React from "react";
import { usePathname, useRouter } from "next/navigation"
import Image from 'next/image'

interface ProductCardProps {
    id: string,
    image: string;
    label?: string;
    labelColor?: string;
    title: string;
    price: number;
    isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    image,
    label,
    title,
    price,
}) => {

    const router = useRouter()
    const pathname = usePathname();
    const routeTitle = pathname.includes('/brand') ? 'brand' : ''
    const bname = pathname.split('/').filter(Boolean).pop();
    return (
        <button className="focus:bg-slate-500 focus:rounded-xl" onClick={() => router.push(`/detail/${id}?title=${routeTitle}&name=${bname}`)}>
            <article className="flex-1 shrink basis-0">
                <div className="flex relative gap-2.5 px-1 pt-1 w-full text-xs font-semibold text-white whitespace-nowrap rounded-2xl bg-neutral-50 min-h-[180px]">
                    <Image
                        src={image}
                        alt={title}
                        width={100}
                        height={100}
                        className="object-cover z-0 flex-1 shrink rounded-xl aspect-[0.8] basis-4 w-[150px]"
                    />
                    {label &&
                        <div
                            style={{ backgroundColor: "rgba(245, 156, 40, 1)" }}
                            className={`absolute bottom-0.5 left-0.5 z-0 gap-2.5 self-start px-2 py-1 rounded-xl`}
                        >
                            {label}
                        </div>
                    }
                </div>
                <div className="mt-4 w-full">
                    <h3 className="text-base font-medium text-neutral-800">{title}</h3>
                    <div className="h-px w-[50px] bg-slate-800 mx-auto" />
                    <div className="mt-1 w-full">
                        <div>
                            <span className="text-xl" style={{ color: "rgb(252, 143, 0)" }}>#{price}</span>
                        </div>
                    </div>
                </div>
            </article>
        </button>
    );
};

export default ProductCard;
