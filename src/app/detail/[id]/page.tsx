"use client";
import React from "react";
import ProductInfo from "@/components/detail/ProductInfo";
import SizeSelector from "@/components/detail/SizeSelector";
import ProductActions from "@/components/detail/ProductActions";
import ProductDescription from "@/components/detail/ProductDescription";
import ProductImageGallery from "@/components/detail/ProductImage";
import type { Product } from "@/lib/types/Product";
import { getShoe, getBrandShoe } from "@/lib/config/firebase/app";
import type { ProductOrder } from "@/lib/types/ProductOrder";
import type { ShoeSizes } from "@/lib/types/ShoeSizes";
import loadingImage from "assets/load_image.png"
import { useSearchParams } from "next/navigation";

const ProductDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const searchParams = useSearchParams();
    const title = searchParams.get('title')
    const name = searchParams.get('name')

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
            if (title == "brand")
                (async () => {
                    // console.log(title)
                    const { id } = await params
                    const prod = await getBrandShoe(name, id) as Product
                    setProduct(prod)
                })()
            else
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
        </main >
    );
};

export default ProductDetailPage;
