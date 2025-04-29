import { Dialog, DialogPanel } from '@headlessui/react'
import Image, { StaticImageData } from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'

export default function ProductModal({ setView, img }: { setView: Dispatch<SetStateAction<boolean>>, img: string | StaticImageData }) {
    const [isOpen, setIsOpen] = useState(true)

    function close() {
        setIsOpen(false)
        setView(false)
    }

    return (
        <>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <div>
                                <Image
                                    src={img}
                                    width={600}
                                    height={600}
                                    alt="ADIDAS 4DFWD X PARLEY RUNNING SHOES main view"
                                    className="object-contain z-0 w-full rounded-2xl"
                                />
                                <button className='z-0 gap-2.5 self-end px-2 py-1 rounded-xl -pt-10' onClick={() => close()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                                    </svg>

                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}