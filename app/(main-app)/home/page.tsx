// app/home/page.tsx
"use client";

import { useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([
    { name: "Rice", stock: 50, price: 40 },
    { name: "Sugar", stock: 20, price: 30 },
    { name: "Milk", stock: 10, price: 50 },
  ]);

  return (
    <main className="min-h-screen py-2 px-1 w-full">

      <div className="h-full w-full p-4 bg-white shadow-2xl/15 rounded-lg">

        
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-violet-600">Dashboard</h1>
        <button className="bg-linear-to-r from-purple-700 to-violet-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Add Product
        </button>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-3xl font-bold mt-2">{products.length}</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold">Low Stock Items</h2>
          <p className="text-3xl font-bold mt-2">
            {products.filter(p => p.stock < 15).length}
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold">Total Stock Value</h2>
          <p className="text-3xl font-bold mt-2">
            ₹{products.reduce((acc, p) => acc + p.stock * p.price, 0)}
          </p>
        </div>
      </section>

      {/* Product Table */}
      <section>
        <h2 className="text-xl font-bold mb-4">Inventory</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
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
                  <td className={`py-2 px-4 font-semibold ${p.stock < 15 ? "text-red-600" : "text-green-600"}`}>{p.stock}</td>
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
