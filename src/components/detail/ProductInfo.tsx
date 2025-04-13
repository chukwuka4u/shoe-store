import React from "react";

const ProductInfo = ({ title, price }: { title: string, price: number }) => {
    return (
        <section className="flex z-0 flex-col mt-6 w-full font-semibold">
            <span className="gap-2.5 self-start px-4 py-2 text-xs text-white bg-indigo-500 rounded-lg">
                New Release
            </span>
            <h1 className="mt-2 text-xl text-neutral-800">
                {title}
            </h1>
            <p className="mt-2 text-2xl text-indigo-500">#{price.toString()}.00</p>
        </section>
    );
};

export default ProductInfo;