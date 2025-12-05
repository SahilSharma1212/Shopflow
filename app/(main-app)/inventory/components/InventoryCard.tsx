'use client'

import { useRouter } from "next/navigation";
import { Package, MapPin, TrendingUp, Copy, DollarSign } from "lucide-react";
import { useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';
import ThemeContext from "@/app/_context/ThemeContext";
import {motion} from 'motion/react'
interface InventoryCardProps {
  inventoryId: number;
  name: string;
  totalItems: number;
  location: string;
  currentWorth: number;
}

export default function InventoryCard({
  inventoryId,
  name,
  totalItems,
  location,
  currentWorth
}: InventoryCardProps) {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  // --- SUBTLE THEME-BASED CLASSES ---
  const cardBg = isDark ? "dark-bg-color border border-gray-800 text-gray-100" : "bg-white border border-gray-200 text-gray-900";
  const headerText = isDark ? "text-gray-100" : "text-gray-800";
  const subText = isDark ? "text-gray-400" : "text-gray-500";

  // Subtle Accents:
  const accentText = isDark ? "text-zinc-300" : "text-zinc-600";
  const worthText = isDark ? "text-emerald-500" : "text-emerald-700"; 
  const locationText = isDark ? "text-gray-400" : "text-gray-600"; 

  // Subtle Button:
  const buttonBg = isDark ? "bg-gray-800 border border-gray-700 text-gray-400 hover:bg-gray-700" : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50";


  // Function to handle ID copy
  const handleCopyId = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(inventoryId.toString());
    toast.success('Warehouse ID Copied!', {
      style: { fontSize: '14px', fontWeight: '500' },
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <motion.section
        onClick={() => router.push(`/inventory/${inventoryId}`)}
        className={`
          rounded-xl p-5 ${cardBg} 
          flex flex-col gap-4 
          cursor-pointer 
          transition-all duration-300
          hover:shadow-lg hover:shadow-gray-400/10 hover:-translate-y-1
        `}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Header */}
        <div className={`flex justify-between items-start border-b pb-3 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className={`font-extrabold text-xl leading-tight ${headerText}`}>
            {name}
          </h3>
          <button
            onClick={handleCopyId}
            className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 transition ${buttonBg}`} // Adjusted font size for better button fit
            title="Copy Warehouse ID"
          >
            <span className="mr-1">ID:</span>
            <Copy size={12} /> {/* Smaller icon size for button */}
          </button>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-4">
          {/* Total Items */}
          <div className="flex flex-col">
            <p className={`text-sm font-medium flex items-center gap-1 ${subText}`}>
              <Package className="w-4 h-4" /> Total Items
            </p>
            <p className={`text-2xl font-bold mt-1 ${accentText}`}>
              {totalItems.toLocaleString()}
            </p>
          </div>

          {/* Current Worth */}
          <div className="flex flex-col">
            <p className={`text-sm font-medium flex items-center gap-1 ${subText}`}>
              <DollarSign className="w-4 h-4" /> Current Worth
            </p>
            <p className={`text-2xl font-bold mt-1 ${worthText}`}>
              {formatCurrency(currentWorth)}
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <p className={`text-sm font-medium flex items-center gap-1 ${subText}`}>
              <MapPin className="w-4 h-4" /> Location
            </p>
            <p className={`text-base font-semibold truncate mt-1 ${locationText}`}>
              {location}
            </p>
          </div>

          {/* Added a placeholder for another stat to fill the grid nicely, if needed */}
          {/* Example: Last Replenishment */}
          <div className="flex flex-col">
            <p className={`text-sm font-medium flex items-center gap-1 ${subText}`}>
              <TrendingUp className="w-4 h-4" /> Last Inflow
            </p>
            <p className={`text-base font-semibold truncate mt-1 ${locationText}`}>
              1 week ago
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className={`flex justify-between items-center pt-3 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`text-xs flex items-center gap-1 ${subText}`}>
            <TrendingUp className="w-3 h-3 text-yellow-500" /> Last Activity:
          </p>
          <p className={`text-sm font-medium ${subText}`}>
            23 May 2024
          </p>
        </div>
      </motion.section>
    </>
  );
}