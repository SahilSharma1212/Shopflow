"use client";

import { Package } from "lucide-react";
import { useContext } from "react";
import ThemeContext from "@/app/_context/ThemeContext";
import InventoryCard from "./components/InventoryCard";

const mockInventory = [
  { id: 101, name: "Main Distribution Hub", totalItems: 1250, location: "Sector 4, Anytown" },
  { id: 102, name: "West Coast Annex", totalItems: 890, location: "Inventory Blvd, CA" },
  { id: 103, name: "Digital Spares Unit", totalItems: 420, location: "Server Room B" },
  { id: 104, name: "North-East Fulfillment", totalItems: 2100, location: "Route 9 Inventory" },
];

export default function HomePage() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  // Theme-based styles
  const bgColor = isDark ? "dark-bg-color" : "bg-white";
  const textColor = isDark ? "text-gray-100" : "text-gray-900";
  const borderColor = isDark ? "border-gray-800" : "border-gray-300";
  const buttonBg = isDark ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-black text-white hover:bg-gray-900";
  const cardBg = isDark ? "bg-zinc-900 border border-gray-800 text-gray-100" : "bg-white border border-gray-200 text-gray-900";

  return (
    <section className={`min-h-screen pb-5 ${bgColor} ${textColor} custom-scroll`}>
      
      {/* Header */}
      <header className={`sticky top-0 z-40 px-4 py-4 flex items-center justify-between gap-3 border-b ${borderColor} ${bgColor}`}>
        <h1 className="flex items-center gap-3 text-2xl font-bold">
          <Package strokeWidth={2} size={28} className={`${isDark ? "text-gray-100" : "text-gray-800"}`} />
          Inventory
        </h1>

        <button className={`px-4 py-2 rounded-md font-normal text-base transition ${buttonBg}`}>
          + Inventory
        </button>
      </header>

      {/* Inventory cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 pt-3 px-5 max-md:px-2">
        {mockInventory.map((inventory) => (
          <InventoryCard
            key={inventory.id}
            inventoryId={inventory.id}
            name={inventory.name}
            totalItems={inventory.totalItems}
            location={inventory.location}
            currentWorth={0}
          />
        ))}
      </div>
    </section>
  );
}
