// export default function DrawerItems() {
//     return (
//         <div>
//             <p className="my-2 p-1 border rounded-2xl">New Drops <span>🔥</span></p>
//             <div className="flex justify-between my-2 p-1 border rounded-2xl">
//                 <p>Men</p>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
//                     <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
//                 </svg>
//             </div>
//             <div className="flex justify-between my-2 p-1 border rounded-2xl">
//                 <p>Women</p>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
//                     <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
//                 </svg>
//             </div>
//         </div >
//     )
// }
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function DrawerItems() {

    const people = ["Men", "Women"]
    return (
        <div>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                <p className="my-2 p-1 border rounded-2xl">New Drops <span>🔥</span></p>
                <kbd className="ml-auto hidden font-sans text-xs group-data-[focus]:inline">⌘D</kbd>
            </button>
            <div className='flex flex-col'>
                {people.map((person) => <Menu>
                    <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 w-full text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-slate-500 data-[focus]:outline-1 data-[focus]:outline-white">
                        <div className="flex justify-between my-2 p-1 border rounded-2xl">
                            <p>{person}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </MenuButton>

                    <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 data-[open]:bg-white"
                    >
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                {/* <Square2StackIcon className="size-4 fill-white/30" /> */}
                                Loafers
                                <kbd className="ml-auto hidden font-sans text-xs group-data-[focus]:inline">⌘D</kbd>
                            </button>
                        </MenuItem>
                        <div className="my-1 h-px bg-slate-500" />
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                {/* <ArchiveBoxXMarkIcon className="size-4 fill-white/30" /> */}
                                Sneakers
                                <kbd className="ml-auto hidden font-sans text-xs group-data-[focus]:inline">⌘A</kbd>
                            </button>
                        </MenuItem>
                    </MenuItems>
                </Menu>
                )}
            </div>
        </div>
    )
}