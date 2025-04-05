'use client'
import CartHeader from "@/components/cart/CartHeader";
import PromoBanner from "@/components/PromoBanner";
import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";
import ProductRecommendations from "@/components/detail/ProductRecommendation";
import NewsletterSignup from "@/components/NewsLetterSection";
import Footer from "@/components/Footer";

function Cart() {
    return (
        <main className="overflow-hidden px-4 pt-6 pb-2.5 mx-auto w-full bg-stone-200 max-md:max-w-[480px]">
            {/* <CartHeader /> */}
            <section className="flex flex-col items-center mt-6 w-full">
                <PromoBanner />
                <CartItem
                />
                <OrderSummary
                    items={1}
                    itemsTotal="$130.00"
                    delivery="$6.99"
                    tax="-"
                    total="$130.00"
                />
                <ProductRecommendations />
                <NewsletterSignup />
                {/* <Footer /> */}
                <p className="mt-6 text-base text-center underline decoration-auto decoration-solid text-neutral-800 underline-offset-auto">
                    <a
                        href="https://visiata.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        © All rights reserved | Made with
                    </a>
                    <a
                        href="https://visiata.com/"
                        className="font-bold"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ❤️
                    </a>
                    <a
                        href="https://visiata.com/"
                        className="text-[rgba(35,35,33,1)]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        by
                    </a>
                    <a
                        href="https://visiata.com/"
                        className="font-semibold text-[rgba(74,105,226,1)]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visiata Systems International
                    </a>
                </p>
            </section>
        </main>
    );
}

export default Cart;
