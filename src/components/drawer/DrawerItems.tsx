import { useRouter } from 'next/navigation';

export default function DrawerItems({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const brands = [
        "adidas",
        "dior",
        "dng",
        "fendi",
        "givenchy",
        "gucci",
        "louis vitton",
        "nike",
        "prada",
        "puma",
        "timberland"
    ]
    const router = useRouter();

    return (
        <div>
            <button onClick={() => { router.push('/new'); setOpen(false) }} className="w-full gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <p className="my-1 p-1">new drops <span>🔥</span></p>
                <div className="my-1 h-px bg-slate-500" />
            </button>
            <div className='flex flex-col'>
                {
                    brands.map((brand, indx) => <button key={indx} onClick={() => {
                        router.push(`/brand/${brand}`)
                        setOpen(false)
                    }} className="flex w-full stretch gap-1 rounded-md py-1 px-3 focus:bg-slate-500">
                        <div className="w-full">
                            <p className="my-1 text-black">{brand}</p>
                            <div className="my-1 h-px bg-slate-500" />
                        </div>
                    </button>
                    )
                }
                <div>
                    <button onClick={() => {
                        router.push(`#`)
                        setOpen(false)
                    }} className="flex w-full stretch gap-1 rounded-md py-1 px-3 focus:bg-slate-500">
                        <div className="w-full">
                            <div className='flex flex-row justify-between'>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p className="my-1 text-black">order history</p>
                                <div></div>
                            </div>
                            <div className="my-1 h-px bg-slate-500" />
                        </div>
                    </button>
                    <button onClick={() => {
                        router.push(`#`)
                        setOpen(false)
                    }} className="flex w-full stretch gap-1 rounded-md py-1 px-3 focus:bg-slate-500">
                        <div className="w-full">
                            <div className='flex flex-row justify-between'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                <p className="my-1 text-black">my favorites</p>
                                <div></div>
                            </div>
                            <div className="my-1 h-px bg-slate-500" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}