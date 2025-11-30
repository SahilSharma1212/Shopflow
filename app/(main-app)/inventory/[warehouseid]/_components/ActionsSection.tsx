'use client'
import { PackageMinus, PackagePlus, Plus, UserLockIcon, X } from 'lucide-react';
import { useContext } from 'react';
import ThemeContext from '@/app/_context/ThemeContext';

export default function ActionsSection() {
  const { theme } = useContext(ThemeContext);

  // Define theme-based color mapping
  const colors = {
    light: {
      category: "bg-green-100 text-green-700 hover:bg-green-200",
      subCategory: "bg-cyan-100 text-cyan-700 hover:bg-cyan-200",
      restock: "bg-blue-100 text-blue-700 hover:bg-blue-200",
      remove: "bg-orange-100 text-orange-700 hover:bg-orange-200",
      suppliers: "bg-purple-100 text-purple-700 hover:bg-purple-200",
      terminate: "bg-red-100 text-red-700 hover:bg-red-200",
    },
    dark: {
      category: "bg-green-800/50 text-green-300 hover:bg-green-700",
      subCategory: "bg-cyan-800/50 text-cyan-300 hover:bg-cyan-700",
      restock: "bg-blue-800/50 text-blue-300 hover:bg-blue-700",
      remove: "bg-orange-800/50 text-orange-300 hover:bg-orange-700",
      suppliers: "bg-purple-800/50 text-purple-300 hover:bg-purple-700",
      terminate: "bg-red-800 text-red-300 hover:bg-red-700",
    },
  };

  const themeColors = theme === 'light' ? colors.light : colors.dark;

  return (
    <section className="flex flex-col items-start justify-center gap-2 w-full">
      <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-purple-500' : 'text-purple-300'}`}>Actions</h3>
      <div className="flex items-center justify-start w-full gap-4 flex-wrap">

        <button className={`px-4 py-2 rounded-lg transition-colors font-medium flex items-center justify-center gap-3 ${themeColors.category}`}>
          Category
          <Plus strokeWidth={1.5} size={20}/>
        </button>

        <button className={`px-4 py-2 rounded-lg transition-colors font-medium flex items-center justify-center gap-3 ${themeColors.subCategory}`}>
          Sub-Category
          <Plus strokeWidth={1.5} size={20}/>
        </button>

        <button className={`px-4 py-2 rounded-lg transition-colors font-medium flex items-center justify-center gap-3 ${themeColors.restock}`}>
          Restock
          <PackagePlus strokeWidth={1.5} size={20}/>
        </button>

        <button className={`px-4 py-2 rounded-lg transition-colors font-medium flex items-center justify-center gap-3 ${themeColors.remove}`}>
          Remove items
          <PackageMinus strokeWidth={1.5} size={20}/>
        </button>

        <button className={`px-4 py-2 rounded-lg transition-colors font-medium flex items-center justify-center gap-3 ${themeColors.suppliers}`}>
          Suppliers
          <UserLockIcon strokeWidth={1.5} size={20}/>
        </button>

        <button className={`px-4 py-2 rounded-lg transition-colors font-medium flex items-center justify-center gap-3 ${themeColors.terminate}`}>
          Terminate
          <X strokeWidth={1.5} size={20}/>
        </button>

      </div>
    </section>
  );
}
