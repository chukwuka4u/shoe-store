import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Key, useEffect, useState } from 'react'

export default function MyModal({ transferObj }: { transferObj: object }) {
    const [isOpen, setIsOpen] = useState(true)

    function close() {
        setIsOpen(false)
    }
    const ls = {
        transfer_reference: "MockFLWRef-1748113329581",
        transfer_account: "0067100155",
        transfer_bank: "Mock Bank",
        account_expiration: "2025-05-24 8:02:09 PM",
        transfer_note: "Mock note",
        transfer_amount: "10000.00"
    }
    useEffect(() => console.log(transferObj), [])
    return (
        <>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                                charge initiated
                            </DialogTitle>
                            <div>
                                <ol>
                                    {Object.entries(ls).map(([key, value]: [key: Key, value: string], indx: Key) =>
                                        <li key={indx} className='flex flex-row justify-between text-sm py-2'>
                                            <p>{key} :</p>
                                            <p>{value}</p>
                                        </li>
                                    )
                                    }
                                </ol>
                                <p className='text-xs'>after making payment to the above details, your order will be sent and your order id will be sent your email. check your order for order status</p>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

        </>
    )
}