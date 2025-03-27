import React from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types/Product"
import { getShoes } from "@/lib/config/firebase/app";

const ProductGrid: React.FC = () => {
    const [products, setProducts] = React.useState<Product[] | null>(null)
    React.useEffect(
        () => {
            //test that firebase is working!!
            (async () => {
                const shoes: Product[] = await getShoes() as Product[]

                setProducts(shoes)
            })()
        }
        , [])

    return (
        <section className="w-full">
            <div className="grid grid-cols-2 gap-4 items-start mt-6 w-full">
                {products && products.map((product, index) => (
                    <ProductCard
                        key={index}
                        id={product.id}
                        image={product.image}
                        label={product.label}
                        labelColor={product.labelColor}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
