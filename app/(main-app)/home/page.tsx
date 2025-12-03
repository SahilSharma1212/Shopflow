import { ArrowDown, ArrowDownUp, Home, LayoutDashboard, PackagePlus, ReceiptIndianRupee, UsersIcon, TrendingUp, TrendingDown, Clock, BarChart } from 'lucide-react'
import React from 'react'

// --- Button Data (Kept as you provided) ---
const buttons = [
  {
    name: "+ Party",
    icon: UsersIcon,
    style: "hover:bg-blue-50 hover:scale-102 hover:-translate-y-0.5 text-blue-700 transition-all border-2 border-blue-100"
  },
  {
    name: "ReStock",
    icon: PackagePlus,
    style: "hover:bg-green-50 hover:scale-102 hover:-translate-y-0.5 text-green-700 transition-all border-2 border-green-100"
  },
  {
    name: "Manage",
    icon: LayoutDashboard,
    style: "hover:bg-indigo-50 hover:scale-102 hover:-translate-y-0.5 text-indigo-700 transition-all border-2 border-indigo-100"
  },
  {
    name: "Exchange",
    icon: ArrowDownUp,
    style: "hover:bg-cyan-50 hover:scale-102 hover:-translate-y-0.5 text-cyan-700 transition-all border-2 border-cyan-100"
  },
  {
    name: "Billing",
    icon: ReceiptIndianRupee,
    style: "hover:bg-blue-50 hover:scale-102 hover:-translate-y-0.5 text-blue-700 transition-all border-2 border-blue-100"
  },
  {
    name: "Expense",
    icon: ArrowDown,
    style: "hover:bg-red-50 hover:scale-102 hover:-translate-y-0.5 text-red-700 transition-all border-2 border-red-100"
  }
]

// --- Mock Data for Expenses (for scrollable list) ---
const mockExpenses = [
  { name: "Rent Payment", amount: 15000, party: "Landlord Corp", date: "Dec 1, 2025" },
  { name: "Office Supplies", amount: 2500, party: "Staples Inc", date: "Nov 28, 2025" },
  { name: "Software Subscription", amount: 4999, party: "Adobe", date: "Nov 25, 2025" },
  { name: "Utility Bills", amount: 7200, party: "PowerGrid Co", date: "Nov 20, 2025" },
  { name: "Team Lunch", amount: 3500, party: "Local Cafe", date: "Nov 15, 2025" },
  { name: "Marketing Spend", amount: 9800, party: "Ads Platform", date: "Nov 10, 2025" },
]

// --- Main Component ---
export default function Page() {
  return (
    <section className={`min-h-screen bg-white pb-5`}>
      <h1 className={`border-b px-4 py-4 text-2xl flex items-center justify-start gap-3 font-bold text-gray-800`}>
        <Home strokeWidth={2} size={40} className='w-5 h-5' />
        Home
      </h1>

      {/* Home Actions Section */}
      <section className={`px-4 py-6 flex items-start flex-wrap justify-start gap-5 max-sm:gap-3 max-sm:py-2 max-md:justify-evenly max-sm:px-2`}>
        {
          buttons.map((button, idx) => {
            return (
              <button
                key={idx}
                className={`
                  flex items-start justify-center gap-1 flex-col py-4 rounded-lg w-28 bg-white px-4 border  
                  hover:shadow-md max-sm:w-24 max-sm:text-sm
                  cursor-pointer
                  max-md:flex-row max-md:px-2 max-sm:py-2
                  ${button.style}
                `}
              >
                {<button.icon className='w-6 h-6' strokeWidth={1.5} />}
                <span className='text-sm font-medium mt-1 text-black'>{button.name}</span>
              </button>
            )
          })
        }
      </section>

      {/* Stats Section: 3-column layout */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-2'>

        {/* 1. Weekly Sales Card */}
        <div className={` border-gray-200
          p-5 rounded-xl  border bg-white 
          text-green-600
        `}>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-sm font-semibold uppercase text-gray-500'>Weekly Sales</h3>
            <TrendingUp className={`w-6 h-6 text-green-600`} strokeWidth={1.5} />
          </div>
          <p className='text-3xl font-bold mb-2 text-gray-800'>
            ₹ 1,45,200
          </p>
          <p className='text-sm text-gray-500'>+12% vs last week</p>
        </div>

        {/* 2. Pending Receivables Card */}
        <div className={`
          p-5 rounded-xl  border border-gray-200 bg-white 
          text-yellow-600
        `}>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-sm font-semibold uppercase text-gray-500'>Pending Receivables</h3>
            <Clock className={`w-6 h-6 text-yellow-600`} strokeWidth={1.5} />
          </div>
          <p className='text-3xl font-bold mb-2 text-gray-800'>
            ₹ 45,900
          </p>
          <p className='text-sm text-gray-500'>3 parties due this week</p>
        </div>
      </section>


      <section className={`px-4 mt-6`}>
        <div className={`
          p-5 rounded-xl  border border-gray-200 bg-white 
          row-span-2 md:col-span-1 /* Layout setting */
        `}>
          <div className='flex items-center justify-between mb-4 border-b pb-2'>
            <h3 className='text-base font-semibold text-gray-800 flex items-center gap-2'>
              <TrendingDown className='w-5 h-5 text-red-600' strokeWidth={2} />
              Recent Expenses
            </h3>
            <span className='text-sm font-medium text-red-600'>₹ 63,099 Total</span> {/* Updated total */}
          </div>

          {/* Scrollable Expense List */}
          <div className='max-h-72 overflow-y-auto space-y-3 pr-2 custom-scroll'>
            {mockExpenses.map((expense, index) => (
              <div key={index} className='flex justify-between items-center text-sm py-2 border-b last:border-b-0'>
                <div className='flex flex-col'>
                  <span className='font-medium text-gray-800'>{expense.name}</span>
                  <span className='text-xs text-gray-500'>{expense.party} · {expense.date}</span>
                </div>
                <span className='font-bold text-red-600'>
                  - ₹{expense.amount.toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Analytics Chart Placeholder */}
      <section className='px-4 mt-6'>
        <div className='bg-white p-5 rounded-xl  border border-gray-200 h-60 flex items-center justify-center'>
          <p className='text-gray-400 flex items-center gap-2 text-lg'><BarChart className='w-6 h-6' />Detailed Analytics Chart Placeholder</p>
        </div>
      </section>

    
    </section>
  )
}