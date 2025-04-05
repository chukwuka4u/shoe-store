'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import DrawerItems from './DrawerItems'

export default function Drawer({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-15 pt-2">
                        <DialogPanel
                            transition
                            className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:-translate-x-full sm:duration-700"
                        >
                            <div className="flex flex-col overflow-y-scroll bg-white py-6 shadow-xl rounded-r-4xl">
                                <div className="px-4 sm:px-6">
                                    <DialogTitle className="text-base font-semibold text-gray-900">
                                        <div className="flex flex-row gap-2">
                                            <p>Hey There</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                                <path fillRule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </DialogTitle>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    <DrawerItems />
                                </div>
                            </div>
                            <TransitionChild>
                                <div className="absolute top-0 right-0 -mr-8 flex pt-4 pl-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                                    >
                                        <span className="absolute -inset-2.5" />
                                        <span className="sr-only">Close panel</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </TransitionChild>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
