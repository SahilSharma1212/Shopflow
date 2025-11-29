import React from 'react'

export default function page() {
  return (
    <main className="min-h-screen py-2 px-1 w-full ">

       <div className="h-full w-full p-6 bg-white shadow-2xl/15 rounded-lg flex flex-col gap-6">

        {/* Page Header */}
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-violet-600">
          Create New Warehouse
        </h1>

        {/* Form */}
        <div className="flex flex-col gap-4 max-w-lg">

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700 font-medium">
              Warehouse Name
            </label>
            <input
              type="text"
              placeholder="e.g. Central Storage"
              className="p-2 border border-gray-300 rounded focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700 font-medium">
              Location
            </label>
            <input
              type="text"
              placeholder="e.g. Bangalore, Karnataka"
              className="p-2 border border-gray-300 rounded focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Button */}
          <button
            className="bg-linear-to-r from-purple-700 to-purple-600 text-white py-2 px-4 rounded shadow hover:opacity-95 mt-2"
          >
            Create Warehouse
          </button>

        </div>

      </div>

    </main>
  )
}
