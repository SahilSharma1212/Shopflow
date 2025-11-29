"use client";

import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

export default function HomePage() {
  const [products] = useState([
    { name: "Rice", stock: 50, price: 40, sales: 120 },
    { name: "Sugar", stock: 20, price: 30, sales: 80 },
    { name: "Milk", stock: 10, price: 50, sales: 150 },
  ]);

  const COLORS = ["#7c3aed", "#a855f7", "#c084fc"];

  return (
    <main className="h-screen p-2 px-0 w-full">

      {/* Scrollable wrapper */}
      <div className="h-full w-full p-4 bg-white shadow-2xl/15 rounded-lg overflow-y-auto">

        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-violet-600">
            Dashboard
          </h1>
          <button className="bg-linear-to-r from-purple-700 to-violet-600 text-white px-4 py-2 rounded hover:opacity-90">
            Add Product
          </button>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
            <h2 className="text-lg font-semibold text-gray-700">Total Products</h2>
            <p className="text-4xl font-bold mt-2 text-purple-700">{products.length}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
            <h2 className="text-lg font-semibold text-gray-700">Low Stock Items</h2>
            <p className="text-4xl font-bold mt-2 text-red-500">
              {products.filter(p => p.stock < 15).length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
            <h2 className="text-lg font-semibold text-gray-700">Total Stock Value</h2>
            <p className="text-4xl font-bold mt-2 text-green-600">
              ₹{products.reduce((acc, p) => acc + p.stock * p.price, 0)}
            </p>
          </div>
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
            <h2 className="text-xl font-bold mb-4 text-gray-700">Sales Overview</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={products}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#7c3aed" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
            <h2 className="text-xl font-bold mb-4 text-gray-700">Sales Distribution</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={products}
                    dataKey="sales"
                    nameKey="name"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={5}
                  >
                    {products.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

        </section>

        {/* Inventory Table */}
        <section className="pb-20">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Inventory</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow border border-purple-100">
              <thead>
                <tr className="bg-purple-200">
                  <th className="py-2 px-4 text-left">Product</th>
                  <th className="py-2 px-4 text-left">Stock</th>
                  <th className="py-2 px-4 text-left">Price (₹)</th>
                </tr>
              </thead>

              <tbody>
                {products.map((p, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2 px-4">{p.name}</td>
                    <td className={`py-2 px-4 font-semibold ${p.stock < 15 ? "text-red-600" : "text-green-600"}`}>
                      {p.stock}
                    </td>
                    <td className="py-2 px-4">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </main>
  );
}
