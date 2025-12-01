"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import StoreIcon from "./_components/StoreIcon";
import { useContext } from "react";
import ThemeContext from "@/app/_context/ThemeContext";

export default function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
      <div className={`h-full w-full p-4 rounded-lg flex flex-col gap-2 shadow-2xl/15
        ${theme === "light" ? "bg-white text-gray-800 scrollbar-light" : "bg-gray-900 text-gray-200 scrollbar-dark"}
      `}>

        {/* Header */}
        <header className="flex justify-between items-center mb-3">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-violet-500">
            Stores
          </h1>

          <Link
            href={'/inventory/new-warehouse'}
            className="transition flex items-center justify-center gap-3 bg-linear-to-r from-purple-700 to-purple-600 rounded-sm p-2 text-white hover:bg-purple-700 max-sm:scale-80"
          >
            <Plus />Add Store
          </Link>
        </header>


        {/* Stores section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-y-auto scrollbar-dark p-3">
          <StoreIcon storeid={10}/>
          <StoreIcon storeid={20}/>
          <StoreIcon storeid={30}/>
          <StoreIcon storeid={40}/>
          <StoreIcon storeid={20}/>
          <StoreIcon storeid={30}/>
          <StoreIcon storeid={40}/>
          <StoreIcon storeid={20}/>
          <StoreIcon storeid={30}/>
          <StoreIcon storeid={40}/>
        </div>

      </div>
  );
}
