import React from "react";

const PromoBanner = () => {
    return (
        <section className="max-w-full font-semibold bg-neutral rounded-2xl text-neutral-800 w-[358px]">
            <h1 className="text-2xl">Launch Discount!!!</h1>
            <p className="mt-2 text-xs opacity-80">
                Enjoy up to 10% discount on the first 2 products on your cart, valid from 01/01/2025 till 01/01/2026. No code needed.
            </p>
            {/* <p className="mt-2 text-sm opacity-80">
                <span>Join us </span>
                <span> or </span>
                <span>Sign-in</span>
            </p> */}
        </section>
    );
};

export default PromoBanner;
