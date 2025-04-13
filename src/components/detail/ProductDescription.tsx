import React from "react";

const ProductDescription = ({ title }: { title: string }) => {
    return (
        <section className="z-0 mt-6 w-full text-base text-neutral-800">
            <h2 className="font-semibold uppercase">About the product</h2>
            <p className="mt-2 opacity-80">
                Black Colored
                <br />
                <br />
                This is the {title.toLowerCase()}.
                <br />
                <br />
                Payments are made directly to the vendor (check whatsapp community).
                <br />
                Join the WhatsApp community for any questions or returns
            </p>
        </section>
    );
};

export default ProductDescription;
