import React from "react";

const ProductDescription: React.FC = () => {
    return (
        <section className="z-0 mt-6 w-full text-base text-neutral-800">
            <h2 className="font-semibold uppercase">About the product</h2>
            <p className="mt-2 opacity-80">
                Shadow Navy / Army Green
                <br />
                <br />
                This product is excluded from all promotional discounts and offers.
                <br />
                <br />
                Pay over time in interest-free installments with Affirm, Klarna or
                Afterpay.
                <br />
                Join adiClub to get unlimited free standard shipping, returns, &
                exchanges.
            </p>
        </section>
    );
};

export default ProductDescription;
