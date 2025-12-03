'use client'

import { useRouter } from "next/navigation";
import { Package, MapPin, TrendingUp, Copy, DollarSign } from "lucide-react"; // Import DollarSign icon
import toast, { Toaster } from 'react-hot-toast';

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
  
  // Function to handle ID copy
  const handleCopyId = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card navigation when clicking the copy button
    navigator.clipboard.writeText(inventoryId.toString());
    toast.success('Warehouse ID Copied!', {
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
      <section
        onClick={() => router.push(`/inventory/${inventoryId}`)}
        className={`
          rounded-xl p-5 border border-gray-200 bg-white 
          shadow-lg shadow-gray-300/10 
          flex flex-col gap-4 
          cursor-pointer 
          transition-all duration-300
          hover:shadow-xl hover:shadow-gray-300/30 hover:-translate-y-1 
        `}
      >
        {/* 1. Card Header - Name and ID */}
        <div className="flex justify-between items-start border-b pb-3 border-gray-100">
          <h3 className="font-extrabold text-xl text-gray-800 leading-tight">
            {name}
          </h3>
          <button 
            onClick={handleCopyId}
            className={`text-sm font-semibold bg-gray-200 text-gray-800 px-3 py-1 rounded-full flex items-center gap-1 transition hover:bg-gray-300`}
            title="Copy Warehouse ID"
          >
            <span className="text-gray-800 mr-1">ID:</span>
            <Copy size={14} className={`text-gray-800`} />
          </button>
        </div>

        {/* 2. Key Statistics/Information Section - Changed to grid-cols-3 */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Total Items */}
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-500 flex items-center gap-1">
                <Package className={`w-4 h-4 text-gray-500`} /> 
              Total Items
            </p>
            <p className={`text-2xl font-bold text-indigo-500 mt-1`}>
              {totalItems.toLocaleString()}
            </p>
          </div>

          {/* 3. ADDED: Current Worth of Inventory */}
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-500 flex items-center gap-1">
              <DollarSign className={`w-4 h-4 text-gray-500`} /> 
              Current Worth
            </p>
            {/* Displaying the formatted currency value in an accent color */}
            <p className={`text-2xl font-bold text-green-600 mt-1`}> 
              {formatCurrency(currentWorth)}
            </p>
          </div>
          
          {/* Location */}
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-500 flex items-center gap-1">
              <MapPin className={`w-4 h-4 text-gray-500`} /> 
              Location
            </p>
            <p className={`text-base font-semibold text-blue-500 truncate mt-1`}>
              {location}
            </p>
          </div>
        </div>
        
        {/* 3. Footer/Metadata (Last Activity) */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <TrendingUp className={`w-3 h-3 text-yellow-500`} />
            Last Activity:
          </p>
          <p className={`text-sm font-medium text-gray-500`}>
            23 May 2024
          </p>
        </div>

      </section>
    </>
  );
}