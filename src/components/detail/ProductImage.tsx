'use client'
import Image, { StaticImageData } from 'next/image'
import ProductModal from './ProductModal';
import { useState } from 'react';

const ProductImageGallery = ({ img }: { img: string | StaticImageData }) => {
    const [view, setView] = useState(false)
    return (
        <section className="flex flex-col product-gallery">
            <Image
                src={img}
                width={200}
                height={200}
                alt="ADIDAS 4DFWD X PARLEY RUNNING SHOES main view"
                className="object-cover z-0 w-full rounded-2xl aspect-[1.21]"
            />
            <button className='z-0 gap-2.5 self-end px-2 py-1 rounded-xl -pt-10' onClick={() => setView(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
            </button>
            {
                view && <ProductModal setView={setView} img={img} />
            }
        </section>
    );
};

export default ProductImageGallery;
