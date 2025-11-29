'use client'
import { LayoutDashboard, Moon, Package, Settings, ShoppingBag, Sun, User } from 'lucide-react';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import { usePathname } from 'next/navigation';
import ThemeContext from '@/app/_context/ThemeContext';

export default function Sidebar() {
    const [isSideBaropen, setIsSideBaropen] = useState<boolean>(true);
    const pathname = usePathname();
    const sidebarItems = [
        {
            name: "Dashboard",
            link: "/home",
            Icon: LayoutDashboard,
        },
        {
            name: "Inventory",
            link: "/inventory",
            Icon: Package,
        },
        {
            name: "Store",
            link: "/store",
            Icon: ShoppingBag,
        },
        {
            name: "Delivery",
            link: "/delivery",
            Icon: User,
        },
        {
            name: "Settings",
            link: "/settings",
            Icon: Settings,
        }
    ];
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className={`p-2 px-1 h-screen z-0 max-lg:w-20 ${isSideBaropen ? 'w-70' : 'w-20'}`}>
            {/* actual sidebar  */}
            <div className='h-full w-full rounded-xl bg-white flex flex-col px-3 py-4 relative gap-5 shadow-2xl/20 shadow-purple-800'>
                {/* logo div */}
                <div
                    className='font-bold text-center bg-gradient-to-r from-purple-900 via-violet-800 to-blue-800 bg-clip-text text-transparent cursor-pointer'
                    onClick={() => setIsSideBaropen(!isSideBaropen)}
                >
                    <span className='max-lg:hidden'>{isSideBaropen ? 'SHopBLox' : 'SB'}</span>
                    <span className='lg:hidden'>SB</span>
                </div>

                {/* sidebar buttons */}
                <div className='flex flex-col'>
                    {
                        sidebarItems.map((item, idx) => {
                            const isActive = pathname.startsWith(item.link);
                            return (
                                <button key={idx}>
                                    <Link href={item.link} className={`w-full flex items-center gap-3 py-2 rounded-sm 
${isSideBaropen ? 'lg:px-3 lg:justify-start' : 'justify-center'} 
max-lg:justify-center
${isActive ? 'text-purple-700 bg-purple-50 font-semibold' : 'text-gray-700 hover:bg-purple-100'} 
transition-colors`}>
                                        <item.Icon size={20} />
                                        {isSideBaropen && <span className='max-lg:hidden'>{item.name}</span>}
                                    </Link>
                                    <hr />
                                </button>
                            )
                        })
                    }
                    <button
                        className={`w-full flex items-center gap-3 py-2 rounded-sm 
${isSideBaropen ? 'lg:px-3 lg:justify-start' : 'justify-center'} 
max-lg:justify-center
${theme === 'light' ? 'text-purple-700 bg-purple-50 font-semibold' : 'text-gray-700 hover:bg-purple-100'} 
transition-colors`}
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        {isSideBaropen && <span className='max-lg:hidden'>{theme === 'light' ? 'Dark' : 'Light'}</span>}
                    </button>
                </div>

                <div
                    className='font-bold text-center bg-gradient-to-r from-purple-900 via-violet-800 to-blue-800 bg-clip-text text-transparent cursor-pointer'
                    onClick={() => setIsSideBaropen(!isSideBaropen)}
                >
                    <span className='max-lg:hidden'>{isSideBaropen ? 'SHopBLox' : 'SB'}</span>
                    <span className='lg:hidden'>SB</span>
                </div>
            </div>
        </div>
    )
}