import EmblaCarousel from "./Carousel";

export default function AuthOptions() {
    return (
        <>
            <div className="p-4 w-full">
                <p className="text-center font-semibold">
                    FEATURED BRANDS
                </p>
                <div className="h-[1px] my-4 mx-auto w-[40%] bg-slate-500"></div>
                <div>
                    <EmblaCarousel />
                </div>
            </div>
        </>
    )
}