'use client'
import ThemeContext from '@/app/_context/ThemeContext'
import {
  ArrowDown,
  ArrowDownUp,
  Home,
  LayoutDashboard,
  PackagePlus,
  ReceiptIndianRupee,
  UsersIcon,
  TrendingUp,
  TrendingDown,
  Clock,
  BarChart,
} from 'lucide-react'
import { useContext } from 'react'

const buttons = [
  { name: '+ Party', icon: UsersIcon, color: 'blue' },
  { name: 'ReStock', icon: PackagePlus, color: 'green' },
  { name: 'Manage', icon: LayoutDashboard, color: 'indigo' },
  { name: 'Exchange', icon: ArrowDownUp, color: 'cyan' },
  { name: 'Billing', icon: ReceiptIndianRupee, color: 'blue' },
  { name: 'Expense', icon: ArrowDown, color: 'red' },
]

const mockExpenses = [
  { name: 'Rent Payment', amount: 15000, party: 'Landlord Corp', date: 'Dec 1, 2025' },
  { name: 'Office Supplies', amount: 2500, party: 'Staples Inc', date: 'Nov 28, 2025' },
  { name: 'Software Subscription', amount: 4999, party: 'Adobe', date: 'Nov 25, 2025' },
  { name: 'Utility Bills', amount: 7200, party: 'PowerGrid Co', date: 'Nov 20, 2025' },
  { name: 'Team Lunch', amount: 3500, party: 'Local Cafe', date: 'Nov 15, 2025' },
  { name: 'Marketing Spend', amount: 9800, party: 'Ads Platform', date: 'Nov 10, 2025' },
]

export default function Page() {
  const { theme } = useContext(ThemeContext)
  const isDark = theme === 'dark'

  // Text color classes based on theme
  const textPrimary = isDark ? 'text-gray-100' : 'text-gray-900'
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-600'
  const textMuted = isDark ? 'text-gray-500' : 'text-gray-500'
  const borderColor = isDark ? 'border-gray-800' : 'border-gray-200'
  const cardBg = isDark ? 'bg-zinc-900/80 border border-gray-800' : 'bg-white border border-gray-200'

  return (
    <section className={`h-screen overflow-y-auto ${isDark ? 'dark-bg-color custom-scroll-dark' : 'custom-scroll bg-white'} ${textPrimary} transition-all duration-300 pb-8`}>


      {/* Header */}
      <h1 className={`border-b sticky top-0 ${isDark ? "dark-bg-color" : 'bg-white'} ${borderColor} px-6 py-5 text-2xl font-bold flex items-center gap-3`}>
        <Home className="w-5 h-5" strokeWidth={2.2} />
        Home
      </h1>

      {/* Action Buttons */}
      <section className="px-6 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
        {buttons.map(({ name, icon: Icon, color }, idx) => (
          <button
            key={idx}
            className={`
              flex flex-col items-center justify-center gap-3 py-6 rounded-2xl border-2 transition-all duration-300
              ${isDark
                ? `bg-zinc-900/70 border-gray-800 hover:bg-zinc-800/90 hover:border-gray-700`
                : `bg-white border-gray-200 hover:shadow-xl hover:border-gray-300`
              }
              hover:scale-105 active:scale-100 group
            `}
          >
            <Icon
              className={`w-8 h-8 transition-colors 
                ${color === 'blue' && (isDark ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600')}
                ${color === 'green' && (isDark ? 'text-green-400 group-hover:text-green-300' : 'text-green-600')}
                ${color === 'indigo' && (isDark ? 'text-indigo-400 group-hover:text-indigo-300' : 'text-indigo-600')}
                ${color === 'cyan' && (isDark ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-cyan-600')}
                ${color === 'red' && (isDark ? 'text-red-400 group-hover:text-red-300' : 'text-red-600')}
              `}
              strokeWidth={2}
            />
            <span className={`text-sm font-semibold ${textSecondary}`}>
              {name}
            </span>
          </button>
        ))}
      </section>

      {/* Stats Cards */}
      <section className="px-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Weekly Sales */}
        <div className={`p-6 rounded-2xl ${cardBg}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-sm font-bold uppercase tracking-wider ${textMuted}`}>Weekly Sales</h3>
            <TrendingUp className="w-7 h-7 text-green-500" />
          </div>
          <p className="text-4xl font-bold mt-2">₹1,45,200</p>
          <p className={`text-sm mt-2 ${textSecondary}`}>+12% vs last week</p>
        </div>

        {/* Pending Receivables */}
        <div className={`p-6 rounded-2xl ${cardBg}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-sm font-bold uppercase tracking-wider ${textMuted}`}>Pending Receivables</h3>
            <Clock className="w-7 h-7 text-yellow-500" />
          </div>
          <p className="text-4xl font-bold mt-2">₹45,900</p>
          <p className={`text-sm mt-2 ${textSecondary}`}>3 parties due this week</p>
        </div>
      </section>

      {/* Recent Expenses */}
      <section className="px-6 mt-8">
        <div className={`p-6 rounded-2xl ${cardBg} `}>
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700/50">
            <h3 className="text-lg font-bold flex items-center gap-3">
              <TrendingDown className="w-6 h-6 text-red-500" />
              Recent Expenses
            </h3>
            <span className="text-red-500 font-bold">₹63,099 Total</span>
          </div>

          <div className={`max-h-80 ${isDark ? 'custom-scroll-dark' : 'custom-scroll'} overflow-y-auto space-y-4`}>
            {mockExpenses.map((exp, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-gray-700/30 last:border-0">
                <div>
                  <p className="font-semibold text-base">{exp.name}</p>
                  <p className={`text-xs ${textSecondary}`}>{exp.party} • {exp.date}</p>
                </div>
                <span className="font-bold text-red-500 text-lg">
                  - ₹{exp.amount.toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Placeholder */}
      <section className="px-6 mt-8">
        <div className={`rounded-2xl ${cardBg} h-72 flex flex-col items-center justify-center`}>
          <BarChart className="w-14 h-14 text-gray-500 mb-3" />
          <p className={`text-xl ${textMuted}`}>Detailed Analytics Chart</p>
          <p className={`text-sm ${textSecondary} mt-1`}>Coming soon</p>
        </div>
      </section>
    </section>
  )
}