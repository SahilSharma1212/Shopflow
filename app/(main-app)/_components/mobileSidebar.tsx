'use client'
import React, { useContext } from 'react'
import { LayoutDashboard, Package, ShoppingBag, User, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeContext from '@/app/_context/ThemeContext'

export default function MobileSidebar() {
  const pathname = usePathname()
  const { theme } = useContext(ThemeContext)
  const isLight = theme === 'light'

  const navItems = [
    { name: "Home", link: "/home", Icon: LayoutDashboard },
    { name: "Inventory", link: "/inventory", Icon: Package },
    { name: "Store", link: "/store", Icon: ShoppingBag },
    { name: "Delivery", link: "/delivery", Icon: User },
    { name: "Settings", link: "/settings", Icon: Settings }
  ]

  return (
    <nav className={`sm:hidden fixed bottom-0 left-0 right-0 z-50 
      ${isLight 
        ? 'bg-white border-t border-gray-200' 
        : 'bg-gray-900 border-t border-gray-700'}
      shadow-2xl`}>
      <div className='flex justify-around items-center h-16 px-1'>
        {navItems.map((item, idx) => {
          const isActive = pathname.startsWith(item.link)
          return (
            <Link
              key={idx}
              href={item.link}
              className={`flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-lg min-w-[60px] transition-all duration-200
                ${isActive
                  ? (isLight 
                      ? 'text-purple-700 bg-purple-50' 
                      : 'text-purple-400 bg-gray-800')
                  : (isLight 
                      ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-50' 
                      : 'text-gray-400 hover:text-purple-300 hover:bg-gray-800')
                }`}
            >
              <item.Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}