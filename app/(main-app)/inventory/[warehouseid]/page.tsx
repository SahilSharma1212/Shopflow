"use client";

import { useState, useContext } from "react";
import { useParams } from "next/navigation";
import ActionsSection from "./_components/ActionsSection";
import ThemeContext from "@/app/_context/ThemeContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, Legend, ResponsiveContainer } from "recharts";

const salesData = [
  { day: "Mon", sales: 120, revenue: 2400 },
  { day: "Tue", sales: 200, revenue: 3200 },
  { day: "Wed", sales: 150, revenue: 2100 },
  { day: "Thu", sales: 80, revenue: 1400 },
  { day: "Fri", sales: 170, revenue: 2800 },
  { day: "Sat", sales: 90, revenue: 1500 },
  { day: "Sun", sales: 220, revenue: 3500 },
];

export default function WarehousePage() {
  const { warehouseid } = useParams();
  const [activeTab, setActiveTab] = useState("Sales Analytics");
  const { theme } = useContext(ThemeContext);

  const tabs = ["Sales Analytics", "Current Stock", "Logs", "About"];

  return (
    <main className={`${theme === "light" ? "bg-gray-50 text-gray-800" : "bg-gray-950 text-gray-200"} min-h-screen py-2 px-2 w-full`}>
      <div className={`${theme === "light" ? "bg-white border-purple-200" : "bg-gray-900 border-gray-700"} h-full w-full p-4 rounded-lg flex flex-col items-center justify-start gap-4 shadow-2xl/15`}>

        {/* Warehouse Header */}
        <p className="text-2xl font-bold">Inventory ID : {warehouseid}</p>

        {/* Actions Section */}
        <ActionsSection />

        {/* Tabs nav */}
        <nav className={`w-full grid grid-cols-4 text-center border-b ${theme === "light" ? "border-purple-200" : "border-gray-700"}`}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 font-medium transition-colors ${activeTab === tab
                ? "text-purple-700 border-b-2 border-purple-700"
                : theme === "light"
                  ? "text-gray-700 hover:text-purple-600"
                  : "text-gray-300 hover:text-purple-400"
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <section className={`w-full rounded-lg p-3 flex-1 overflow-auto max-h-[63vh] flex flex-col gap-6
  ${theme === "light" ? "scrollbar-light" : "scrollbar-dark"}`}>

          {/* Sales Analytics */}
          {activeTab === "Sales Analytics" && (
            <div className="flex flex-col gap-6">
              <h2 className={`${theme === "light" ? "text-gray-800" : "text-gray-200"} text-xl font-semibold mb-2`}>Sales Analytics</h2>

              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme === "light" ? "#e5e7eb" : "#374151"} />
                    <XAxis dataKey="day" stroke={theme === "light" ? "#374151" : "#d1d5db"} />
                    <YAxis stroke={theme === "light" ? "#374151" : "#d1d5db"} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#7c3aed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme === "light" ? "#e5e7eb" : "#374151"} />
                    <XAxis dataKey="day" stroke={theme === "light" ? "#374151" : "#d1d5db"} />
                    <YAxis stroke={theme === "light" ? "#374151" : "#d1d5db"} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Current Stock */}
          {activeTab === "Current Stock" && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">Current Stock</h2>

              <div className={`overflow-auto max-h-[50vh] rounded-lg border ${theme === "light" ? "border-purple-200" : "border-gray-700"}`}>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className={`sticky top-0 ${theme === "light" ? "bg-purple-50" : "bg-gray-700"}`}>
                    <tr>
                      {["Item", "SKU", "Quantity", "Status"].map(h => (
                        <th key={h} className={`px-4 py-2 text-left text-sm font-medium ${theme === "light" ? "text-purple-700" : "text-gray-200"}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${theme === "light" ? "bg-white divide-gray-200" : "bg-gray-800 divide-gray-700"}`}>
                    {[{ item: "Item A", sku: "SKU001", quantity: 120 },
                    { item: "Item B", sku: "SKU002", quantity: 20 },
                    { item: "Item C", sku: "SKU003", quantity: 0 },
                    { item: "Item D", sku: "SKU004", quantity: 75 },
                    { item: "Item E", sku: "SKU005", quantity: 5 },
                    { item: "Item F", sku: "SKU006", quantity: 200 },
                    ].map((p, idx) => {
                      let status = "In Stock", statusClass = "text-green-600";
                      if (p.quantity === 0) { status = "Out of Stock"; statusClass = "text-red-600 font-bold"; }
                      else if (p.quantity < 20) { status = "Low Stock"; statusClass = "text-yellow-600 font-semibold"; }
                      return (
                        <tr key={idx}>
                          <td className="px-4 py-2">{p.item}</td>
                          <td className="px-4 py-2">{p.sku}</td>
                          <td className="px-4 py-2">{p.quantity}</td>
                          <td className={`px-4 py-2 ${statusClass}`}>{status}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Logs */}
          {activeTab === "Logs" && (
            <div className="gap-2 h-[64vh]">
              <h2 className="text-xl font-semibold mb-3">Logs</h2>
              <div className={`overflow-auto h-full rounded-lg border p-2 flex flex-col gap-2 ${theme === "light" ? "border-purple-200" : "border-gray-700"}`}>
                {[{ time: "2025-11-29 09:15", user: "Admin", action: "Added 50 units of Item A" },
                { time: "2025-11-29 10:30", user: "Staff1", action: "Removed 20 units of Item B" },
                { time: "2025-11-29 11:00", user: "Admin", action: "Generated sales report" },
                { time: "2025-11-29 12:15", user: "Staff2", action: "Updated Item D quantity to 75" },
                { time: "2025-11-29 13:40", user: "Admin", action: "Marked Item C as Out of Stock" },
                { time: "2025-11-29 14:05", user: "Staff1", action: "Transferred 30 units of Item F to Store 2" }].map((log, idx) => (
                  <div key={idx} className={`p-2 rounded-lg border transition-colors ${theme === "light" ? "border-gray-200 hover:bg-purple-50" : "border-gray-700 hover:bg-gray-700/40"}`}>
                    <p className="text-sm text-gray-500">{log.time} - {log.user}</p>
                    <p>{log.action}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* About */}
          {activeTab === "About" && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">About Warehouse</h2>
              <div className={`overflow-auto max-h-[50vh] rounded-lg border p-4 flex flex-col gap-3 ${theme === "light" ? "border-purple-200" : "border-gray-700"}`}>
                {[
                  ["Warehouse Name", "SHopBlox Central"],
                  ["Location", "Sector 21, Goa, India"],
                  ["Manager", "Rohit Sharma"],
                  ["Contact", "+91 98765 43210"],
                  ["Capacity", "5000 items"],
                  ["Operating Hours", "Mon-Sat: 9AM - 7PM"],
                  ["Last Audit", "2025-11-15"],
                  ["Notes", "This warehouse handles electronics and home appliances. Temperature controlled."]
                ].map(([label, value], idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className={`font-medium ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>{label}:</span>
                    <span className={`${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </section>
      </div>
    </main>
  )
}
