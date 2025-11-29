
"use client";

import { Plus } from "lucide-react";
import AlertMessages from "../_components/AlertMessages";
import Warehouseicon from "./_components/Warehouseicon";
import Link from "next/link";

export default function HomePage() {

  return (
    <main className="min-h-screen py-2 px-1 w-full ">

      <div className="h-full w-full p-4 bg-white shadow-2xl/15 rounded-lg flex flex-col gap-2">


        {/* Header */}
        <header className="flex justify-between items-center mb-3">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-violet-600
          ">Inventory</h1>

          <Link href={'/inventory/new-warehouse'} className="transition flex items-center justify-center gap-3 bg-linear-to-r from-purple-700 to-purple-600 rounded-sm p-2 text-white hover:bg-purple-700">
            <Plus />
            Add Warehouse
          </Link>
        </header>
        <AlertMessages />
        <AlertMessages />

        <header className="mt-3 text-xl font-semibold">
          Your Warehouses
          <hr className="h-2" />
        </header>

        {/* Warehouses section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Warehouseicon warehouseid={10}/>
          <Warehouseicon warehouseid={20}/>
          <Warehouseicon warehouseid={30}/>
          <Warehouseicon warehouseid={40}/>
        </div>

      </div>
    </main>
  );
}
