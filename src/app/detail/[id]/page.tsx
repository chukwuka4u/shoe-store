"use client";
import React from "react";
import ProductInfo from "@/components/detail/ProductInfo";
import SizeSelector from "@/components/detail/SizeSelector";
import ProductActions from "@/components/detail/ProductActions";
import ProductDescription from "@/components/detail/ProductDescription";
import ProductImageGallery from "@/components/detail/ProductImage";
import type { Product } from "@/lib/types/Product";
import { getShoe } from "@/lib/config/firebase/app";
import type { ProductOrder } from "@/lib/types/ProductOrder";
import type { ShoeSizes } from "@/lib/types/ShoeSizes";
import loadingImage from "assets/load_image.png"

const ProductDetailPage = ({ params, }: { params: Promise<{ id: string }> }) => {
    const [product, setProduct] = React.useState<Product | null>(null)
    const [size, setSize] = React.useState<ShoeSizes>(39)
    const productOrder: ProductOrder | null = product && {
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        size: size,
        quantity: 1
    }
    React.useEffect(
        () => {
            (async () => {
                const { id } = await params
                const prod = await getShoe(id) as Product
                setProduct(prod)
            })()
        }
    )
    React.useEffect(() => console.log(size), [size])
    return (
        <main className="flex relative flex-col mx-auto w-full max-w-[480px]">
            <ProductImageGallery img={product ? product.image : loadingImage} />
            <ProductInfo title={product ? product.title : ""} price={product ? product.price : 0} />
            {/* <ColorSelector /> */}
            <SizeSelector setSize={setSize} />
            <ProductActions product={productOrder!} />
            <ProductDescription title={product ? product!.title : ""} />
            {/* <section className="flex z-0 gap-1 justify-center items-start mt-6 w-full">
                <div className="flex shrink-0 w-8 h-1 bg-indigo-500 rounded-lg" />
                <div className="flex shrink-0 w-8 h-1 rounded-lg bg-neutral-800 bg-opacity-30" />
                <div className="flex shrink-0 w-8 h-1 rounded-lg bg-neutral-800 bg-opacity-30" />
                <div className="flex shrink-0 w-8 h-1 rounded-lg bg-neutral-800 bg-opacity-30" />
            </section> */}
        </main >
    );
};

export default ProductDetailPage;
