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
  const isDark = theme === 'dark';

  // Theme-based classes for the section background and text
  const sectionBg = isDark ? "dark-bg-color" : "bg-white"; // Assuming 'dark-bg-color' is defined globally or in CSS
  const headerText = isDark ? "text-gray-100" : "text-gray-800";
  const headerBorder = isDark ? "border-b-gray-700" : "border-b-gray-300";
  const stickyBg = isDark ? "dark-bg-color" : "bg-white";
  
  // Subtle Button styling
  const buttonClasses = isDark 
    ? "bg-gray-700 text-white hover:bg-[rgb(13,13,13)]" // Use a primary accent color for the main action button
    : "bg-indigo-600 text-white hover:bg-[rgb(13,13,13)]";

  return (

    // Apply min-h-screen and theme background
    <section className={`min-h-screen ${sectionBg} pb-5`}>

      {/* Header */}
      <header className={`border-b ${headerBorder} px-4 py-4 text-2xl flex items-center justify-between gap-3 font-bold ${headerText} sticky top-0 z-40 ${stickyBg}`}>

        <h1 className={`flex items-center justify-start gap-5`}>
          
        <ShoppingBag strokeWidth={2} size={40} className='w-5 h-5' />
        Store
        </h1>

        <button className={`text-base font-normal px-4 py-2 rounded-lg transition ${buttonClasses}`}>
            + Store
        </button>
      </header>

      {/* Stores section */}
      {/* Increased padding on larger screens for better spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 h-full pt-3 px-6 max-md:px-4">
        {mockStore.map((Store) => (
          // Note: StoreCard component must be modified to accept the 'theme' prop or use ThemeContext internally to apply the subtle styles correctly.
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