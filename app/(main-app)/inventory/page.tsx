"use client";

import { MinusCircle, Plus } from "lucide-react";
import AlertMessages from "../_components/AlertMessages";
import Warehouseicon from "./_components/Warehouseicon";
import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "@/app/_context/ThemeContext";

export default function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`min-h-screen py-2 ${theme == 'light' ? 'bg-gray-50' : 'bg-gray-950'} px-1 w-full`}>

      <div className={`h-full w-full p-4 rounded-lg flex flex-col gap-2 shadow-2xl/15
        ${theme === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-gray-200"}
      `}
      >

        {/* Header */}
        <header className="flex justify-between items-center mb-3">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-violet-500">
            Inventory
          </h1>

          <Link
            href={'/inventory/new-warehouse'}
            className="transition flex items-center justify-center gap-3 bg-linear-to-r from-purple-700 to-purple-600 rounded-sm p-2 text-white hover:bg-purple-700"
          >
            <Plus />
            Add Warehouse
          </Link>
        </header>

        
        <AlertMessages />
        <AlertMessages /> 
        {/* no current updates */}
        <div className={`${theme == 'light' ? 'bg-gray-100' : 'bg-gray-800/30  text-gray-400'} p-3 rounded-lg flex items-center justify-start gap-3`}>

          <MinusCircle className='text-gray-600/90' />
          No Messages or alerts.
        </div>

        <header className="mt-3 text-xl font-semibold">
          Your Warehouses
          <hr className={"h-2"} />
        </header>

        {/* Warehouses section */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full ${theme == 'light' ? 'scrollbar-light' : 'scrollbar-dark'}
    grid-auto-rows-[9rem] overflow-y-auto px-3
    ${theme === "light" ? "text-gray-800 scrollbar-thumb-gray-400 scrollbar-track-gray-200"
              : "text-gray-200 scrollbar-thumb-gray-600 scrollbar-track-gray-800"}`}
        >
          <Warehouseicon warehouseid={10} />
          <Warehouseicon warehouseid={20} />
          <Warehouseicon warehouseid={30} />
          <Warehouseicon warehouseid={40} />

          <Warehouseicon warehouseid={10} />
          <Warehouseicon warehouseid={20} />
          <Warehouseicon warehouseid={30} />
          <Warehouseicon warehouseid={40} />
          <Warehouseicon warehouseid={10} />
          <Warehouseicon warehouseid={20} />
          <Warehouseicon warehouseid={30} />
          <Warehouseicon warehouseid={40} />
        </div>


      </div>
    </main>
  );
}
