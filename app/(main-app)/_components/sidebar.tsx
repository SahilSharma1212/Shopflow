"use client";
import { IndianRupee, LayoutDashboard, Moon, Package, Settings, ShoppingBag, Sun, User, UsersIcon } from 'lucide-react';
import Link from 'next/link';
import { useContext, useState } from 'react'
import { usePathname } from 'next/navigation';
import ThemeContext from '@/app/_context/ThemeContext';

export default function Sidebar() {
    const [isSideBaropen, setIsSideBaropen] = useState<boolean>(true);
    const pathname = usePathname();
    const sidebarItems = [
        { name: "Dashboard", link: "/home", Icon: LayoutDashboard },
        { name: "Inventory", link: "/inventory", Icon: Package },
        { name: "Store", link: "/store", Icon: ShoppingBag },
        { name: "Expenses", link: "/expenses", Icon: IndianRupee },
        { name: "Party", link: "/party", Icon: UsersIcon },
        { name: "Delivery", link: "/delivery", Icon: User },
        { name: "Settings", link: "/settings", Icon: Settings },
    ];

    const { theme, setTheme } = useContext(ThemeContext);
    const isLight = theme === "light";

    return (
        <div className={`max-sm:hidden h-screen z-0 max-lg:w-20 ${isSideBaropen ? 'w-70' : 'w-20 '} ${theme == 'light' ? 'bg-gray-50' : 'bg-gray-950'}`}>

            {/* actual sidebar */}
            <div
                className={`h-full  w-full flex flex-col px-3 py-4 relative gap-5 border-r 
                ${isLight ? "bg-white text-gray-700 border-gray-300" : "dark-bg-color text-gray-200 border-gray-700"} transition-all`}
            >

                {/* logo */}
                <div
                    className={`font-bold text-center bg-linear-to-r ${isLight? "text-black" : "text-white"}  cursor-pointer`}
                    onClick={() => setIsSideBaropen(!isSideBaropen)}
                >
                    <span className='max-lg:hidden'>{isSideBaropen ? 'ShopFlow' : 'SB'}</span>
                    <span className='lg:hidden'>SB</span>
                </div>

                {/* sidebar buttons */}
                <div className='flex flex-col'>
                    {sidebarItems.map((item, idx) => {
                        const isActive = pathname.startsWith(item.link);

                        return (
                            <button key={idx}>
                                <Link
                                    href={item.link}
                                    className={`w-full flex items-center gap-3 py-2 rounded-sm
                                    ${isSideBaropen ? 'lg:px-3 lg:justify-start' : 'justify-center'}
                                    max-lg:justify-center
                                    ${isActive
                                            ? (isLight
                                                ? " bg-black text-white font-semibold"
                                                : "text-white bg-gray-700 font-semibold")
                                            : (isLight
                                                ? "hover:bg-gray-100 text-gray-700"
                                                : "hover:bg-[rgb(22, 22, 22)] text-gray-300")
                                        }
                                    transition-colors`}
                                >
                                    <item.Icon size={20} />
                                    {isSideBaropen && <span className='max-lg:hidden'>{item.name}</span>}
                                </Link>
                                <hr className={`${isLight ? "border-gray-200" : "border-gray-700"}`} />
                            </button>
                        );
                    })}

                    {/* Theme Toggle */}
                    <button
                        className={`w-full flex items-center gap-3 py-2 rounded-sm
                        ${isSideBaropen ? 'lg:px-3 lg:justify-start' : 'justify-center'}
                        max-lg:justify-center
                        ${isLight
                                ? "bg-gray-50  text-black font-semibold"
                                : "text-white bg-black/20  font-semibold"}
                        transition-colors`}
                        onClick={() => setTheme(isLight ? "dark" : "light")}
                    >
                        {isLight ? <Moon size={20} /> : <Sun size={20} />}
                        {isSideBaropen && <span className='max-lg:hidden'>{isLight ? 'Dark' : 'Light'}</span>}
                    </button>
                </div>
            </div>
        </div>
    )
}
