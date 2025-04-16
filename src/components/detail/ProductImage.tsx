import Image, { StaticImageData } from 'next/image'

const ProductImageGallery = ({ img }: { img: string | StaticImageData }) => {

    return (
        <section className="product-gallery">
            <Image
                src={img}
                width={200}
                height={200}
                alt="ADIDAS 4DFWD X PARLEY RUNNING SHOES main view"
                className="object-cover z-0 w-full rounded-2xl aspect-[1.21]"
            />
            {/* <div className="flex z-0 gap-2 items-start mt-6 w-full">
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/232601dd85970606141b13991b8f857313cea10b67e063c8e57aed5856433553?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                    alt="ADIDAS 4DFWD X PARLEY RUNNING SHOES thumbnail 1"
                    className="object-contain shrink-0 w-16 rounded-lg aspect-square"
                />
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a8abfe6d14c8d9a6277379eab88851b01a2efbeaa06d35770cea922f6458de2?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                    alt="ADIDAS 4DFWD X PARLEY RUNNING SHOES thumbnail 2"
                    className="object-contain shrink-0 w-16 rounded-lg aspect-square"
                />
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4a78388b40d7f18bd89366da9dc0fb2da2a79b717baf1202123c7fdd9c5b992?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                    alt="ADIDAS 4DFWD X PARLEY RUNNING SHOES thumbnail 3"
                    className="object-contain shrink-0 w-16 rounded-lg aspect-square"
                />
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6da876ee171cf8fda20830660175824d3fb515894b7924222246f50c685b6547?placeholderIfAbsent=true&apiKey=d9a7767b77bf421d8f4999f03a5d17d1"
                    alt="ADIDAS 4DFWD X PARLEY RUNNING SHOES thumbnail 4"
                    className="object-contain shrink-0 w-16 rounded-lg aspect-square"
                />
            </div> */}
        </section>
    );
};

export default ProductImageGallery;
