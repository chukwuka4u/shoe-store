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
    title,
    price,
}) => {

    const router = useRouter()
    const pathname = usePathname();
    const routeTitle = pathname.includes('/brand') ? 'brand' : ''
    const bname = pathname.split('/').filter(Boolean).pop();
    return (
        <button className="focus:bg-slate-500" onClick={() => router.push(`/detail/${id}?title=${routeTitle}&name=${bname}`)}>
            <article className="flex-1 shrink basis-0">
                <div className="flex relative gap-2.5 px-1 pt-1 w-full text-xs font-semibold text-white whitespace-nowrap rounded-2xl bg-neutral-50 min-h-[180px]">
                    <Image
                        src={image}
                        alt={title}
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
                <div className="mt-4 w-full">
                    <h3 className="text-base font-medium text-neutral-800">{title}</h3>
                    <div className="mt-2 w-full">
                        <div>
                            view product -{" "}
                            <span style={{ color: "rgba(255,165,47,1)" }}>#{price}</span>
                        </div>
                    </div>
                </div>
            </article>
        </button>
    );
};

export default ProductCard;


// import React from "react";

// interface ProductCardProps {
//   image: string;
//   title: string;
//   price: string;
//   isNew?: boolean;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   image,
//   title,
//   price,
//   isNew = false,
// }) => {
//   return (
//     <article className="flex-1 shrink basis-0">
//       <div className="flex relative gap-2.5 p-2 w-full text-xs font-semibold text-white whitespace-nowrap rounded-2xl bg-neutral-50 min-h-[180px]">
//         <Image
//           src={image}
//           alt={title}
//           className="object-contain overflow-hidden z-0 flex-1 shrink rounded-xl aspect-square basis-4 w-[155px]"
//         />
//         {isNew && (
//           <div className="absolute top-2 left-2 z-0 gap-2.5 self-start px-2 py-1 bg-indigo-500 rounded-xl">
//             New
//           </div>
//         )}
//       </div>
//       <div className="mt-4 w-full">
//         <h3 className="text-base font-semibold text-neutral-800">{title}</h3>
//         <button className="mt-2 w-full text-xs font-medium tracking-wide text-white uppercase">
//           <div className="flex gap-1 justify-center items-center self-stretch px-4 py-3.5 w-full rounded-lg bg-neutral-800 min-h-10">
//             <span>View Product -</span>
//             <span className="text-[rgba(255,165,47,1)]">{price}</span>
//           </div>
//         </button>
//       </div>
//     </article>
//   );
// };

// export default ProductCard;
