import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useRouter } from "next/navigation"

export default function AuthModal() {
    const router = useRouter();
    return (
        <Popover className="relative">
            <PopoverButton className="border-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col bg-white px-2 min-w-[50%] rounded-xl shadow-lg">
                <p>Guest</p>
                <button className="underline text-purple-500" onClick={() => router.push("/auth/signin")}>signin</button>
                <button className="underline text-purple-500" onClick={() => router.push("/auth/signup")}>signUp</button>
            </PopoverPanel>
        </Popover>
    )
}