'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ExpensePage() {
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const sampleTransactions = [
    { title: "Groceries", amount: "₹ 320", time: "2 hrs ago", category: "Food", color: "bg-rose-100 text-rose-700" },
    { title: "Transport", amount: "₹ 80", time: "6 hrs ago", category: "Travel", color: "bg-amber-100 text-amber-700" },
    { title: "Snacks", amount: "₹ 240", time: "Yesterday", category: "Misc", color: "bg-slate-100 text-slate-700" },
    { title: "Medicine", amount: "₹ 520", time: "Yesterday", category: "Health", color: "bg-zinc-100 text-zinc-600" },
    { title: "Online Order", amount: "₹ 890", time: "2 days ago", category: "Shopping", color: "bg-neutral-100 text-neutral-700" },
    { title: "Cab Ride", amount: "₹ 150", time: "2 days ago", category: "Travel", color: "bg-amber-100 text-amber-700" },
    { title: "Breakfast", amount: "₹ 110", time: "3 days ago", category: "Food", color: "bg-rose-100 text-rose-700" },
    { title: "Stationery", amount: "₹ 75", time: "Last Week", category: "Misc", color: "bg-slate-100 text-slate-700" },
  ];

  return (
    <section className="min-h-screen bg-white text-black p-6">

      {/* HEADER */}
      <header className="pb-4 mb-6">
        <h1 className="text-3xl font-bold">Expense</h1>
      </header>

      {/* BUTTONS */}
      <div className="flex gap-4 mb-8">
        <button className="px-5 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-black hover:text-white transition">
          Add Expense
        </button>

        <button className="px-5 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-black hover:text-white transition">
          Add Expense Category
        </button>
      </div>

      {/* DASHBOARD CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* WEEKLY EXPENSE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-xl shadow-sm bg-white border border-gray-200 h-[360px] flex flex-col"
        >
          <h2 className="text-xl font-semibold">Weekly Expense</h2>
          <p className="text-4xl font-bold mt-3 text-gray-800">₹ 8,540</p>

          <p className="text-xs text-gray-500 mt-1 mb-3">Recent transactions</p>

          {/* Scrollable Transaction List */}
          <div className="overflow-y-auto pr-2 space-y-4 custom-scroll flex-1">
            {sampleTransactions.map((t, i) => (
              <div key={i} className="flex justify-between border-b pb-3 border-gray-200">
                <div>
                  <p className="font-medium text-sm">{t.title}</p>
                  <p className="text-xs text-gray-500">{t.time}</p>
                  <span className={`inline-block mt-1 px-2 py-[2px] text-xs rounded-md ${t.color}`}>
                    {t.category}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-700">{t.amount}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TODAY */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-5 rounded-xl shadow-sm bg-white border border-gray-200 h-[360px] flex flex-col"
        >
          <h2 className="text-xl font-semibold">Expense Today</h2>
          <p className="text-4xl font-bold mt-3 text-gray-800">₹ 640</p>

          <p className="text-xs text-gray-500 mt-1 mb-3">Today’s activity</p>

          <div className="overflow-y-auto pr-2 space-y-4 custom-scroll flex-1">
            {sampleTransactions.slice(0, 5).map((t, i) => (
              <div key={i} className="flex justify-between border-b pb-3 border-gray-200">
                <div>
                  <p className="font-medium text-sm">{t.title}</p>
                  <p className="text-xs text-gray-500">{t.time}</p>
                  <span className={`inline-block mt-1 px-2 py-[2px] text-xs rounded-md ${t.color}`}>
                    {t.category}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-700">{t.amount}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* LAST 3 DAYS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-5 rounded-xl shadow-sm bg-white border border-gray-200 h-[360px] flex flex-col"
        >
          <h2 className="text-xl font-semibold">Last 3 Days</h2>
          <p className="text-4xl font-bold mt-3 text-gray-800">₹ 2,130</p>

          <p className="text-xs text-gray-500 mt-1 mb-3">Recent trends</p>

          <div className="overflow-y-auto pr-2 space-y-4 custom-scroll flex-1">
            {sampleTransactions.map((t, i) => (
              <div key={i} className="flex justify-between border-b pb-3 border-gray-200">
                <div>
                  <p className="font-medium text-sm">{t.title}</p>
                  <p className="text-xs text-gray-500">{t.time}</p>
                  <span className={`inline-block mt-1 px-2 py-[2px] text-xs rounded-md ${t.color}`}>
                    {t.category}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-700">{t.amount}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* YEARLY EXPENSE */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-12 p-6 rounded-xl shadow-sm bg-white border border-gray-200"
      >
        <h2 className="text-xl font-semibold mb-4">Yearly Expense (Month-wise)</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {months.map((m, i) => (
            <div key={i} className="p-4 rounded-xl border border-gray-200 shadow-sm bg-white hover:bg-gray-50 transition">
              <p className="text-sm text-gray-500">{m}</p>
              <p className="text-2xl font-semibold text-gray-700 mt-1">
                ₹ {(500505).toFixed(0)}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Custom Scrollbar (very subtle) */}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #cfcfcf;
          border-radius: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>

    </section>
  );
}
