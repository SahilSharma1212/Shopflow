"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import StoreActionsSection from "./_components/StoreActionsSection";

export default function StorePage() {
  const { storeId } = useParams();
  const [activeTab, setActiveTab] = useState<string>("Analytics");

  const tabs = ["Analytics", "Current Stock", "Bill Transactions", "About"];

  return (
    <main className="min-h-screen py-2 px-2 w-full bg-gray-50">
      <div className="h-full w-full p-4 bg-white shadow-2xl/15 rounded-lg flex flex-col gap-4">

        {/* Header */}
        <p className="text-2xl font-bold">Store ID: {storeId}</p>

        {/* Actions Section */}
        <StoreActionsSection />

        {/* Tabs */}
        <nav className="w-full grid grid-cols-4 text-center border-b border-purple-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 font-medium transition-colors ${
                activeTab === tab
                  ? "text-purple-700 border-b-2 border-purple-700"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Scrollable Tab Content */}
        <section className="w-full flex-1 overflow-auto mt-4 rounded-lg bg-white border-2 border-purple-200 p-4 flex flex-col gap-6 max-h-[65vh]">
          
          {/* Analytics Tab */}
          {activeTab === "Analytics" && (
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-semibold">Sales Analytics</h2>
              <p>Here you can display charts for store sales, revenue, and performance.</p>
            </div>
          )}

          {/* Current Stock Tab */}
          {activeTab === "Current Stock" && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">Current Stock</h2>
              <div className="overflow-auto max-h-[50vh] border border-purple-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-purple-50 sticky top-0">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium text-purple-700">Item</th>
                      <th className="px-4 py-2 text-left font-medium text-purple-700">SKU</th>
                      <th className="px-4 py-2 text-left font-medium text-purple-700">Quantity</th>
                      <th className="px-4 py-2 text-left font-medium text-purple-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { item: "Item A", sku: "SKU001", quantity: 120 },
                      { item: "Item B", sku: "SKU002", quantity: 15 },
                      { item: "Item C", sku: "SKU003", quantity: 0 },
                      { item: "Item D", sku: "SKU004", quantity: 75 },
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

          {/* Bill Tab */}
          {activeTab === "Bill Transactions" && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">Recent Bills</h2>
              <div className="overflow-auto max-h-[50vh] flex flex-col gap-2">
                {[
                  { id: "BILL001", customer: "Rohit", amount: 2500, date: "2025-11-29" },
                  { id: "BILL002", customer: "Ananya", amount: 1200, date: "2025-11-28" },
                  { id: "BILL003", customer: "Sahil", amount: 800, date: "2025-11-27" },
                ].map((bill, idx) => (
                  <div key={idx} className="p-2 rounded-lg border border-gray-200 hover:bg-purple-50 transition-colors">
                    <p><span className="font-medium">Bill ID:</span> {bill.id}</p>
                    <p><span className="font-medium">Customer:</span> {bill.customer}</p>
                    <p><span className="font-medium">Amount:</span> ₹{bill.amount}</p>
                    <p><span className="font-medium">Date:</span> {bill.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* About Tab */}
          {activeTab === "About" && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">About Store</h2>
              <div className="overflow-auto max-h-[50vh] flex flex-col gap-3 border border-purple-200 rounded-lg p-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Store Name:</span>
                  <span className="text-gray-800">SHopBlox Store</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Location:</span>
                  <span className="text-gray-800">Sector 21, Goa, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Manager:</span>
                  <span className="text-gray-800">Rohit Sharma</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Contact:</span>
                  <span className="text-gray-800">+91 98765 43210</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Operating Hours:</span>
                  <span className="text-gray-800">Mon-Sat: 9AM - 7PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Notes:</span>
                  <span className="text-gray-800">Electronics and home appliances store.</span>
                </div>
              </div>
            </div>
          )}

        </section>
      </div>
    </main>
  );
}
