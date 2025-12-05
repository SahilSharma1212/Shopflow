"use client";
import { motion } from "framer-motion"; // Changed to 'framer-motion' for common usage
import { Bike } from "lucide-react";
import { useContext } from "react";
import ThemeContext from "@/app/_context/ThemeContext";

export default function DeliveryPage() {
  const { theme } = useContext(ThemeContext);

  // Define background class based on theme for the minimal gradient effect
  const bgClass =
    theme === 'light'
      ? 'bg-gradient-to-br from-white via-gray-50 to-gray-100' // Subtle light gradient
      : 'dark-bg-color'; // Darker, rich gradient

  // Define text color based on theme
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
  
  // Define icon color
  const iconColor = 'text-gray-600'; // Using a distinct color for the icon/accent

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`h-full w-full p-8 flex flex-col items-center justify-center relative gap-12 ${bgClass} shadow-xl rounded-xl`}
    >
      {/* Container for Centered Content */}
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Animated Bike icon */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <Bike size={80} className={`${iconColor}`} />
        </motion.div>

        {/* Main message - Updated styling for premium look */}
        <h1 className={`text-3xl md:text-6xl font-extrabold ${textColor} text-center tracking-tight`}>
          Delivery Partners
        </h1>
        <p className={`text-xl md:text-3xl font-semibold ${iconColor} text-center`}>
          Coming Soon!
        </p>

        {/* Sub-text for context */}
        <p className={`text-sm md:text-lg ${textColor} max-w-lg text-center mt-4`}>
          We&apos;re working hard to integrate reliable delivery partners. Check back shortly!
        </p>
      </div>

    </motion.div>
  );
}