"use client";
import { motion } from "motion/react";
import { Bike } from "lucide-react";

export default function DeliveryPage() {
  return (
    <main className="min-h-screen py-2 px-1 w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-full w-full p-4 flex flex-col items-center justify-center relative gap-20 bg-white shadow-2xl/15 rounded-lg overflow-hidden"
      >
        {/* Decorative blur layers */}
        <motion.div className="h-72 w-72 bg-purple-500/20 blur-2xl absolute -top-10 -left-5" />
        <motion.div className="h-72 w-72 bg-purple-500/20 blur-2xl absolute -top-10 -right-5" />
        <motion.div
          animate={{ x: [0, 3, -3, 7, -3, 4, -8], y: [0, 3, -3, 7, -3, 4, -8] }}
          transition={{ repeat: Infinity }}
          className="h-50 w-96 bg-purple-500/20 blur-2xl absolute -bottom-10 left-1/2 -translate-x-1/2"
        />

        {/* Main message */}
        <p className="text-2xl md:text-5xl font-bold text-purple-700 text-center">
          Delivery Partners will be added soon!
        </p>

        {/* Animated Bike icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Bike size={70} className="text-purple-700" />
        </motion.div>
      </motion.div>
    </main>
  );
}
