'use client'

import { useRouter } from "next/navigation";
import { Package, MapPin, TrendingUp, Copy, DollarSign } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from "react"; // 1. Import useContext
import ThemeContext from "@/app/_context/ThemeContext";
import { motion } from 'motion/react'

interface StoreCardProps {
  storeId: number;
  name: string;
  totalItems: number;
  location: string;
  currentWorth: number;
}

export default function StoreCard({
  storeId,
  name,
  totalItems,
  location,
  currentWorth
}: StoreCardProps) {
  const router = useRouter();

  // 3. Consume the theme context
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  // --- SUBTLE THEME-BASED CLASSES ---
  // Background and borders
  const cardBg = isDark ? "dark-bg-color border-gray-800 text-gray-100" : "bg-white border-gray-200 text-gray-900";
  const borderColor = isDark ? "border-gray-700" : "border-gray-200";
  const lightBorderColor = isDark ? "border-gray-800" : "border-gray-100";
  const headerText = isDark ? "text-gray-100" : "text-gray-800";
  const subText = isDark ? "text-gray-400" : "text-gray-500";

  // Subtle Accents (zinc for Items, Emerald for Worth, Soft Gray for Location)
  const itemText = isDark ? "text-zinc-300" : "text-zinc-600";
  const worthText = isDark ? "text-emerald-500" : "text-emerald-700";
  const locationText = isDark ? "text-gray-400" : "text-gray-600";

  // Subtle Button
  const buttonBg = isDark ? "bg-gray-800 border border-gray-700 text-gray-400 hover:bg-gray-700" : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50";
  const buttonText = isDark ? "text-gray-400" : "text-gray-600";
  const buttonIcon = isDark ? "text-gray-400" : "text-gray-600";

  // Function to handle ID copy
  const handleCopyId = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card navigation when clicking the copy button
    navigator.clipboard.writeText(storeId.toString());
    toast.success('Store ID Copied!', {
      style: {
        fontSize: '14px',
        fontWeight: '500',
      },
    });
  };

  // Helper function to format the worth as currency (e.g., $1,234,567)
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD', // You can change the currency code as needed
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <motion.section
        onClick={() => router.push(`/store/${storeId}`)}
        className={`
          rounded-xl p-5 border ${borderColor} ${cardBg} 
           shadow-gray-200/5 
          flex flex-col gap-4 
          cursor-pointer 
          transition-all duration-300
          hover:shadow-lg hover:shadow-gray-400/10 hover:-translate-y-1 // Softer hover shadow
        `}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* 1. Card Header - Name and ID */}
        <div className={`flex justify-between items-start border-b pb-3 ${lightBorderColor}`}>
          <h3 className={`font-extrabold text-xl ${headerText} leading-tight`}>
            {name}
          </h3>
          <button
            onClick={handleCopyId}
            className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 transition ${buttonBg}`}
            title="Copy Store ID"
          >
            <span className={`mr-1 ${buttonText}`}>ID:</span>
            <Copy size={12} className={buttonIcon} />
          </button>
        </div>

        {/* 2. Key Statistics/Information Section */}
        <div className="grid grid-cols-2 gap-4">

          {/* Total Items */}
          <div className="flex flex-col">
            <p className={`text-sm font-medium ${subText} flex items-center gap-1`}>
              <Package className={`w-4 h-4 ${subText}`} />
              Total Items
            </p>
            <p className={`text-2xl font-bold ${itemText} mt-1`}>
              {totalItems.toLocaleString()}
            </p>
          </div>

          {/* Current Worth of Store */}
          <div className="flex flex-col">
            <p className={`text-sm font-medium ${subText} flex items-center gap-1`}>
              <DollarSign className={`w-4 h-4 ${subText}`} />
              Current Worth
            </p>
            {/* Displaying the formatted currency value in the subtle green accent color */}
            <p className={`text-2xl font-bold ${worthText} mt-1`}>
              {formatCurrency(currentWorth)}
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <p className={`text-sm font-medium ${subText} flex items-center gap-1`}>
              <MapPin className={`w-4 h-4 ${subText}`} />
              Location
            </p>
            <p className={`text-base font-semibold ${locationText} truncate mt-1`}>
              {location}
            </p>
          </div>

          {/* Added a placeholder for another stat to fill the grid nicely, if needed (reusing the last activity footer concept) */}
          <div className="flex flex-col">
            <p className={`text-sm font-medium ${subText} flex items-center gap-1`}>
              <TrendingUp className={`w-4 h-4 ${subText}`} /> Last Audit
            </p>
            <p className={`text-base font-semibold ${locationText} truncate mt-1`}>
              3 days ago
            </p>
          </div>
        </div>

        {/* 3. Footer/Metadata (Last Activity) */}
        <div className={`flex justify-between items-center pt-3 border-t ${lightBorderColor}`}>
          <p className={`text-xs ${subText} flex items-center gap-1`}>
            <TrendingUp className={`w-3 h-3 text-yellow-500`} />
            Last Activity:
          </p>
          <p className={`text-sm font-medium ${subText}`}>
            23 May 2024
          </p>
        </div>

      </motion.section>
    </>
  );
}