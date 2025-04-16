"use client"
import React from "react";
import BrandHeader from "@/components/brand/BrandHeader";
import SectionHeader from "@/components/brand/SectionHeader";
import { Product } from "@/lib/types/Product";
import { getBrandShoes } from "@/lib/config/firebase/app";
import ProductCard from "@/components/home/ProductCard";
import loadingImage from "assets/load_image.png"
import { useParams } from "next/navigation";

const ProductListing = () => {

    const { name } = useParams()
    const [products, setProducts] = React.useState<Product[] | null>(null)
    React.useEffect(
        () => {
            (async () => {
                const shoes: Product[] = await getBrandShoes(name) as Product[]

                setProducts(shoes)
            })()
        }
        , [])
    return (
        <main className="flex flex-col">
            <div className="self-center w-full">
                <BrandHeader
                    backgroundImageUrl={products ? products[0].image : loadingImage}
                    tagline="Limited time only"
                    title="Get 30% off"
                    description="Sneakers made with your comfort in mind so you can put all of your focus into your next session."
                />
            </div>

            {/* <div className="flex gap-5 items-start mt-6 w-full text-sm font-semibold whitespace-nowrap text-neutral-800">
                <FilterButton label="Filters" iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/282c1b662cbba898a29beeb527dbfe092ed8290e?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1" />
                <FilterButton label="Trending" iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/38a17c138c62e393437bfc0b40e2d4f6e5afa91f?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1" />
            </div> */}

            <div className="mt-6 w-full">
                <SectionHeader title="Life Style Shoes" itemCount={products?.length ?? 0} />
                <section className="w-full">
                    <div className="grid grid-cols-2 gap-4 items-start mt-6 w-full">
                        {products ? products.map((product, index) => (
                            <ProductCard
                                key={index}
                                id={product.id}
                                image={product.image}
                                label={product.label}
                                labelColor={product.labelColor}
                                title={product.title}
                                price={product.price}
                            />
                        ))
                            :
                            <div>LOADING...</div>
                        }
                    </div>
                </section>
            </div>
            {/* 
            <div className="mt-6 w-full">
                <Pagination totalPages={10} initialPage={2} />
            </div> */}
        </main>
    );
};

export default ProductListing;

