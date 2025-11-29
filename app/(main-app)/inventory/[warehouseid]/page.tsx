"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import ActionsSection from "./_components/ActionsSection";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample random data
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
  const [activeTab, setActiveTab] = useState<string>("Sales Analytics");

  const tabs = ["Sales Analytics", "Current Stock", "Logs", "About"];

  return (
    <main className="min-h-screen py-2 px-2 w-full bg-gray-50">
      <div className="h-full w-full p-4 bg-white shadow-2xl/15 rounded-lg flex flex-col items-center justify-start gap-4">

        {/* Warehouse Header */}
        <p className="text-2xl font-bold">Warehouse ID : {warehouseid}</p>

        {/* Actions Section */}
        <div className="w-full">
          <ActionsSection />
        </div>

        {/* Tabs  nav*/}
        <nav className="w-full grid grid-cols-4 text-center border-b border-purple-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 font-medium transition-colors ${activeTab === tab
                ? "text-purple-700 border-b-2 border-purple-700"
                : "text-gray-700 hover:text-purple-600"
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <section className="w-full rounded-lg bg-white border-2 border-purple-200 p-3 flex-1 overflow-auto max-h-[63vh] flex flex-col gap-6">

          {/* sales analytics section */}
          {activeTab === "Sales Analytics" && (
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-semibold mb-2">Sales Analytics</h2>

              {/* Bar Chart for Sales */}
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#7c3aed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Line Chart for Revenue */}
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* current stock section */}
          {activeTab === "Current Stock" && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold mb-2">Current Stock</h2>

              <div className="overflow-auto max-h-[50vh] border border-purple-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-purple-50 sticky top-0">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-purple-700">Item</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-purple-700">SKU</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-purple-700">Quantity</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-purple-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { item: "Item A", sku: "SKU001", quantity: 120 },
                      { item: "Item B", sku: "SKU002", quantity: 20 },
                      { item: "Item C", sku: "SKU003", quantity: 0 },
                      { item: "Item D", sku: "SKU004", quantity: 75 },
                      { item: "Item E", sku: "SKU005", quantity: 5 },
                      { item: "Item F", sku: "SKU006", quantity: 200 },
                    ].map((product, idx) => {
                      let status = "In Stock";
                      let statusClass = "text-green-600";
                      if (product.quantity === 0) {
                        status = "Out of Stock";
                        statusClass = "text-red-600 font-bold";
                      } else if (product.quantity < 20) {
                        status = "Low Stock";
                        statusClass = "text-yellow-600 font-semibold";
                      }

                      return (
                        <tr key={idx}>
                          <td className="px-4 py-2">{product.item}</td>
                          <td className="px-4 py-2">{product.sku}</td>
                          <td className="px-4 py-2">{product.quantity}</td>
                          <td className={`px-4 py-2 ${statusClass}`}>{status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* logs section */}
          {activeTab === "Logs" && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold mb-2">Logs</h2>

              <div className="overflow-auto max-h-[50vh] border border-purple-200 rounded-lg p-2 flex flex-col gap-2">
                {[
                  { time: "2025-11-29 09:15", user: "Admin", action: "Added 50 units of Item A" },
                  { time: "2025-11-29 10:30", user: "Staff1", action: "Removed 20 units of Item B" },
                  { time: "2025-11-29 11:00", user: "Admin", action: "Generated sales report" },
                  { time: "2025-11-29 12:15", user: "Staff2", action: "Updated Item D quantity to 75" },
                  { time: "2025-11-29 13:40", user: "Admin", action: "Marked Item C as Out of Stock" },
                  { time: "2025-11-29 14:05", user: "Staff1", action: "Transferred 30 units of Item F to Store 2" },
                ].map((log, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-purple-50 transition-colors"
                  >
                    <p className="text-sm text-gray-500">{log.time} - {log.user}</p>
                    <p className="text-gray-700">{log.action}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* about warehouse */}
          {activeTab === "About" && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold mb-2">About Warehouse</h2>

              <div className="overflow-auto max-h-[50vh] border border-purple-200 rounded-lg p-4 flex flex-col gap-3">

                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Warehouse Name:</span>
                  <span className="text-gray-800">SHopBlox Central</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Location:</span>
                  <span className="text-gray-800">Sector 21, Goa, India</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Manager:</span>
                  <span className="text-gray-800">Rohit Sharma</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Contact:</span>
                  <span className="text-gray-800">+91 98765 43210</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Capacity:</span>
                  <span className="text-gray-800">5000 items</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Operating Hours:</span>
                  <span className="text-gray-800">Mon-Sat: 9AM - 7PM</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Last Audit:</span>
                  <span className="text-gray-800">2025-11-15</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">Notes:</span>
                  <span className="text-gray-800">
                    This warehouse handles electronics and home appliances. Temperature controlled.
                  </span>
                </div>

              </div>
            </div>
          )}

        </section>

      </div>
    </main>
  );
}
