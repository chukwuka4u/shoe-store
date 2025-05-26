import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { logOut } from '@/lib/config/firebase/auth'
import { useRouter } from "next/navigation"

export default function UserModal({ email }: { email: string }) {
    const router = useRouter();
    function signout() {
        logOut();
        router.refresh()
    }
    return (
        <Popover className="relative">
            <PopoverButton className="border-none">
                <div className="rounded-full border border-1 h-[30px] w-[30px]">
                    <p className="text-xl text-center">{email[0]}</p>
                </div>
            </PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col bg-white px-2 min-w-[50%] rounded-xl shadow-lg">
                <p>{email}</p>
                <button className="underline text-purple-500" onClick={() => signout()}>logout</button>
            </PopoverPanel>
        </Popover>
    )
}