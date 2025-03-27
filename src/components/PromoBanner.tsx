import React from "react";

const PromoBanner = () => {
    return (
        <section className="max-w-full font-semibold rounded-2xl text-neutral-800 w-[358px]">
            <h1 className="text-2xl">Saving to celebrate</h1>
            <p className="mt-2 text-xs opacity-80">
                Enjoy up to 60% off thousands of styles during the End of Year sale -
                while suppiles last. No code needed.
            </p>
            <p className="mt-2 text-sm opacity-80">
                <span>Join us </span>
                <span> or </span>
                <span>Sign-in</span>
            </p>
        </section>
    );
};

export default PromoBanner;
