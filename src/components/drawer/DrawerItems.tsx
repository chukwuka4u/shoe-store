import { useRouter } from 'next/navigation';

export default function DrawerItems({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const brands = [
        "adidas",
        "dior",
        "dng",
        "fendi",
        "gucci",
        "nike",
        "prada",
        "puma"
    ]
    const router = useRouter();

    return (
        <div>
            <button onClick={() => { router.push('/'); setOpen(false) }} className="w-full gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <p className="my-1 p-1">new drops <span>🔥</span></p>
                <div className="my-1 h-px bg-slate-500" />
            </button>
            <div className='flex flex-col'>
                {
                    brands.map((brand, indx) => <button onClick={() => {
                        router.push(`/brand/${brand}`)
                        setOpen(false)
                    }} className="flex w-full stretch gap-1 rounded-md py-1 px-3 data-[focus]:bg-white/10">
                        <div className="w-full">
                            <p className="my-1">{brand}</p>
                            <div className="my-1 h-px bg-slate-500" />
                        </div>
                    </button>
                    )
                }

            </div>
        </div>
    )
}