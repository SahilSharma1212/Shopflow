"use client";

import ThemeContext from "@/app/_context/ThemeContext";
import { useContext, useState } from "react";
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
  const { theme } = useContext(ThemeContext);

  const isLight = theme === "light";

  return (
    <main className={`h-screen p-2 px-0 ${isLight?'bg-gray-50':'bg-gray-950'} w-full`}>
      <div
        className={`h-full w-full p-4 overflow-y-auto rounded-lg shadow-2xl/15 
        ${isLight ? "bg-white scrollbar-light" : "bg-gray-900 scrollbar-dark"}`}
      >
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

          {/* Card */}
          {[
            {
              title: "Total Products",
              value: products.length,
              color: "text-purple-700",
            },
            {
              title: "Low Stock Items",
              value: products.filter((p) => p.stock < 15).length,
              color: "text-red-500",
            },
            {
              title: "Total Stock Value",
              value: "₹" + products.reduce((a, p) => a + p.stock * p.price, 0),
              color: "text-green-600",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`p-6 rounded-lg shadow border
              ${isLight
                ? "bg-white border-purple-100 text-gray-700"
                : "bg-gray-800 border-gray-800 text-gray-200"}`}
            >
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className={`text-4xl font-bold mt-2 ${card.color}`}>
                {card.value}
              </p>
            </div>
          ))}

        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Bar Chart */}
          <div
            className={`p-6 rounded-lg shadow border 
            ${isLight
              ? "bg-white border-purple-100 text-gray-700"
              : "bg-gray-800 border-gray-800 text-gray-200"}`}
          >
            <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={products}>
                  <XAxis dataKey="name" stroke={isLight ? "#333" : "#ccc"} />
                  <YAxis stroke={isLight ? "#333" : "#ccc"} />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#7c3aed" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div
            className={`p-6 rounded-lg shadow border 
            ${isLight
              ? "bg-white border-purple-100 text-gray-700"
              : "bg-gray-800 border-gray-800 text-gray-200"}`}
          >
            <h2 className="text-xl font-bold mb-4">Sales Distribution</h2>
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
          <h2 className={`text-xl font-bold mb-4 ${isLight ? "text-gray-700" : "text-gray-200"}`}>
            Inventory
          </h2>

          <div className="overflow-x-auto">
            <table
              className={`min-w-full rounded-lg shadow border 
              ${isLight
                ? "bg-white border-purple-100 text-gray-700"
                : "bg-gray-800 border-gray-800 text-gray-200"}`}
            >
              <thead>
                <tr className={`${isLight ? "bg-purple-200" : "bg-gray-800"}`}>
                  <th className="py-2 px-4 text-left">Product</th>
                  <th className="py-2 px-4 text-left">Stock</th>
                  <th className="py-2 px-4 text-left">Price (₹)</th>
                </tr>
              </thead>

              <tbody>
                {products.map((p, idx) => (
                  <tr key={idx} className="border-b border-gray-800">
                    <td className="py-2 px-4">{p.name}</td>
                    <td
                      className={`py-2 px-4 font-semibold 
                      ${p.stock < 15 ? "text-red-600" : "text-green-500"}`}
                    >
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
