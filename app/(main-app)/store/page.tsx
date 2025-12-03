"use client";

import { ShoppingBag } from "lucide-react";
import { useContext } from "react";
import ThemeContext from "@/app/_context/ThemeContext";
import StoreCard from "./_components/StoreIcon";
const mockStore = [
  { id: 101, name: "Main Distribution Hub", totalItems: 1250, location: "Sector 4, Anytown" },
  { id: 102, name: "West Coast Annex", totalItems: 890, location: "Store Blvd, CA" },
  { id: 103, name: "Digital Spares Unit", totalItems: 420, location: "Server Room B" },
  { id: 104, name: "North-East Fulfillment", totalItems: 2100, location: "Route 9 Store" },
];
export default function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (

    <section className={`min-h-screen bg-white pb-5`}>

      {/* Header */}
      <header className={`border-b px-4 py-4 text-2xl flex items-center justify-between gap-3 font-bold text-gray-800 sticky top-0 z-40 bg-white`}>

        <h1 className={`flex items-center justify-start gap-5`}>
          
        <ShoppingBag strokeWidth={2} size={40} className='w-5 h-5' />
        Store
        </h1>

        <button className={`bg-black text-white text-base font-normal px-4 py-2 rounded-md`}>+ Store</button>
      </header>

      {/* Stores section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 h-full pt-3 px-5 max-md:px-2">
        {mockStore.map((Store) => (
            <StoreCard
              key={Store.id} 
              storeId={Store.id} 
              name={Store.name}
              totalItems={Store.totalItems}
              location={Store.location}
              currentWorth={0}
            />
          ))}
      </div>


    </section>
  );
}
