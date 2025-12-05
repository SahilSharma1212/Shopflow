'use client';

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { IndianRupee } from 'lucide-react';
import ThemeContext from '@/app/_context/ThemeContext';

export default function ExpensePage() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const { theme } = useContext(ThemeContext);

  const sampleTransactions = [
    { title: "Groceries", amount: "₹ 320", time: "2 hrs ago", category: "Food", colorLight: "bg-rose-100 text-rose-700", colorDark: "bg-rose-500/15 text-rose-300" },
    { title: "Transport", amount: "₹ 80", time: "6 hrs ago", category: "Travel", colorLight: "bg-amber-100 text-amber-700", colorDark: "bg-amber-500/15 text-amber-300" },
    { title: "Snacks", amount: "₹ 240", time: "Yesterday", category: "Misc", colorLight: "bg-slate-100 text-slate-700", colorDark: "bg-slate-500/15 text-slate-300" },
    { title: "Medicine", amount: "₹ 520", time: "Yesterday", category: "Health", colorLight: "bg-zinc-100 text-zinc-700", colorDark: "bg-zinc-500/15 text-zinc-300" },
    { title: "Online Order", amount: "₹ 890", time: "2 days ago", category: "Shopping", colorLight: "bg-neutral-100 text-neutral-700", colorDark: "bg-neutral-500/15 text-neutral-300" },
    { title: "Cab Ride", amount: "₹ 150", time: "2 days ago", category: "Travel", colorLight: "bg-amber-100 text-amber-700", colorDark: "bg-amber-500/15 text-amber-300" },
    { title: "Breakfast", amount: "₹ 110", time: "3 days ago", category: "Food", colorLight: "bg-rose-100 text-rose-700", colorDark: "bg-rose-500/15 text-rose-300" },
    { title: "Stationery", amount: "₹ 75", time: "Last Week", category: "Misc", colorLight: "bg-slate-100 text-slate-700", colorDark: "bg-slate-500/15 text-slate-300" },
  ];


  return (
    <section className={`h-screen overflow-y-auto ${theme === 'light' ? 'bg-white text-black' : 'dark-bg-color text-white'} custom-scroll`}>

      {/* HEADER */}
      <h1 className={`border-b px-6 py-5 text-2xl font-bold flex items-center gap-3 
        ${theme === 'light' ? 'border-b-gray-300 text-black' : 'border-b-gray-700 text-white'}`}>
        <IndianRupee className="w-5 h-5" strokeWidth={2} />
        Expenses
      </h1>

      {/* BUTTONS */}
      <div className="flex gap-4 mb-5 mt-5 px-5">
        <button className={`px-5 py-2 rounded-md text-sm font-medium border transition
          ${theme === 'light' ? 'border-gray-300 hover:bg-black hover:text-white' : 'border-gray-700 hover:bg-white hover:text-black'}`}>
          Add Expense
        </button>

        <button className={`px-5 py-2 rounded-md text-sm font-medium border transition
          ${theme === 'light' ? 'border-gray-300 hover:bg-black hover:text-white' : 'border-gray-700 hover:bg-white hover:text-black'}`}>
          Add Expense Category
        </button>
      </div>

      {/* DASHBOARD CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5">

        {/* WEEKLY EXPENSE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-5 rounded-xl shadow-sm border h-[360px] flex flex-col
            ${theme === 'light' ? 'bg-white border-gray-200' : 'dark-bg-color border-gray-700'}`}
        >
          <h2 className="text-xl font-semibold">Weekly Expense</h2>
          <p className={`text-4xl font-bold mt-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>₹ 8,540</p>
          <p className="text-xs text-gray-500 mt-1 mb-3">Recent transactions</p>

          <div className="overflow-y-auto pr-2 space-y-4 custom-scroll flex-1">
            {sampleTransactions.map((t, i) => (
              <div key={i} className={`flex justify-between border-b pb-3 
                ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
                <div>
                  <p className="font-medium text-sm">{t.title}</p>
                  <p className="text-xs text-gray-500">{t.time}</p>
                  <span
                    className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-md
  ${theme === 'light' ? t.colorLight : t.colorDark}`}
                  >

                    {t.category}
                  </span>
                </div>
                <p className={`text-sm font-semibold ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{t.amount}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TODAY */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`p-5 rounded-xl shadow-sm border h-[360px] flex flex-col
            ${theme === 'light' ? 'bg-white border-gray-200' : 'dark-bg-color border-gray-700'}`}
        >
          <h2 className="text-xl font-semibold">Expense Today</h2>
          <p className={`text-4xl font-bold mt-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>₹ 640</p>
          <p className="text-xs text-gray-500 mt-1 mb-3">Today’s activity</p>

          <div className="overflow-y-auto pr-2 space-y-4 custom-scroll flex-1">
            {sampleTransactions.slice(0, 5).map((t, i) => (
              <div key={i} className={`flex justify-between border-b pb-3 
                ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
                <div>
                  <p className="font-medium text-sm">{t.title}</p>
                  <p className="text-xs text-gray-500">{t.time}</p>
                  <span
                    className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-md
  ${theme === 'light' ? t.colorLight : t.colorDark}`}
                  >

                    {t.category}
                  </span>
                </div>
                <p className={`text-sm font-semibold ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{t.amount}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* LAST 3 DAYS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-5 rounded-xl shadow-sm border h-[360px] flex flex-col
            ${theme === 'light' ? 'bg-white border-gray-200' : 'dark-bg-color border-gray-700'}`}
        >
          <h2 className="text-xl font-semibold">Last 3 Days</h2>
          <p className={`text-4xl font-bold mt-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>₹ 2,130</p>
          <p className="text-xs text-gray-500 mt-1 mb-3">Recent trends</p>

          <div className="overflow-y-auto pr-2 space-y-4 custom-scroll flex-1">
            {sampleTransactions.map((t, i) => (
              <div key={i} className={`flex justify-between border-b pb-3 
                ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
                <div>
                  <p className="font-medium text-sm">{t.title}</p>
                  <p className="text-xs text-gray-500">{t.time}</p>
                  <span
                    className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-md
  ${theme === 'light' ? t.colorLight : t.colorDark}`}
                  >

                    {t.category}
                  </span>
                </div>
                <p className={`text-sm font-semibold ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{t.amount}</p>
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
        className={`mt-12 p-6 rounded-xl shadow-sm border
          ${theme === 'light' ? 'bg-white border-gray-200' : 'dark-bg-color border-gray-700'}`}
      >
        <h2 className="text-xl font-semibold mb-4">Yearly Expense (Month-wise)</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {months.map((m, i) => (
            <div key={i} className={`p-4 rounded-xl border shadow-sm transition
              ${theme === 'light' ? 'bg-white border-gray-200 hover:bg-gray-50' : 'dark-bg-color border-gray-700 hover:bg-gray-800'}`}>
              <p className="text-sm text-gray-500">{m}</p>
              <p className={`text-2xl font-semibold mt-1 ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>₹ {500505}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
