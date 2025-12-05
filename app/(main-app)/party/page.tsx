'use client';

import React, { useContext, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, ArrowUpDown, Trash2, IndianRupee } from 'lucide-react';
import ThemeContext from '@/app/_context/ThemeContext';

interface Party {
  id: number;
  name: string;
  balance: number;
  createdAt: string;
}

// Define the exact types for the sort keys
type SortKey = 'name' | 'balance';

export default function PartyPage() {
  const { theme } = useContext(ThemeContext);

  const [parties, setParties] = useState<Party[]>([
    { id: 1, name: 'Rohit Traders', balance: 12500, createdAt: '2024-05-20' },
    { id: 2, name: 'Sharma Suppliers', balance: -3200, createdAt: '2024-05-22' },
    { id: 3, name: 'A-One Distributors', balance: 8600, createdAt: '2024-05-25' },
  ]);

  const [search, setSearch] = useState('');
  // Use the defined SortKey type for the state
  const [sortBy, setSortBy] = useState<SortKey>('name');

  // ✅ Filter + Sort Logic
  const filteredParties = useMemo(() => {
    const data = [...parties].filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortBy === 'name') {
      data.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      data.sort((a, b) => b.balance - a.balance);
    }

    return data;
  }, [parties, search, sortBy]);

  // ✅ Create Party
  const handleCreateParty = () => {
    const name = prompt('Enter Party Name');
    if (!name) return;

    const newParty: Party = {
      id: Date.now(),
      name,
      balance: 0,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setParties([newParty, ...parties]);
  };

  // ✅ Delete Party
  const handleDeleteParty = (id: number) => {
    setParties(parties.filter((p) => p.id !== id));
  };

  // 🛡️ Type-Safe Change Handler
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    // Perform a runtime check (which satisfies TypeScript)
    if (value === 'name' || value === 'balance') {
      setSortBy(value);
    }
  };


  // Theme variables for clarity
  const isLight = theme === 'light';
  const primaryBg = isLight ? 'bg-white' : 'dark-bg-color';
  const primaryText = isLight ? 'text-black' : 'text-white';
  const subtleText = isLight ? 'text-gray-500' : 'text-gray-400';
  const subtleBorder = isLight ? 'border-gray-300' : 'border-gray-700';
  const cardBg = isLight ? 'bg-white border-gray-200 shadow-sm' : 'dark-bg-color border-gray-700';
  const cardHover = isLight ? 'hover:bg-gray-100' : 'hover:bg-gray-700';

  return (
    <section
      className={`min-h-screen ${primaryBg} ${primaryText}`}
    >
      {/* HEADER */}
      <div
        className={`px-6 py-5 border-b flex items-center justify-between ${subtleBorder}`}
      >
        <h1 className="text-2xl font-bold">Parties</h1>

        <button
          onClick={handleCreateParty}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition ${isLight
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
        >
          <Plus className="w-4 h-4" />
          Create Party
        </button>
      </div>

      {/* SEARCH + SORT */}
      <div className="px-6 py-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-md border w-full sm:w-[260px] ${isLight
              ? 'border-gray-300 bg-white'
              : 'border-gray-700 bg-transparent'
            }`}
        >
          <Search className="w-4 h-4 opacity-60" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search party..."
            className={`bg-transparent outline-none text-sm w-full ${primaryText}`}
          />
        </div>

        {/* Sort */}
        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-md border ${subtleBorder}`}
        >
          <ArrowUpDown className="w-4 h-4 opacity-60" />
          <select
            value={sortBy}
            onChange={handleSortChange} // ⬅️ Using the new type-safe handler
            className={`bg-transparent outline-none text-sm ${primaryText}`}
          >
            <option value="name" className={isLight ? 'text-black' : 'dark-bg-color text-white'}>Sort by Name</option>
            <option value="balance" className={isLight ? 'text-black' : 'dark-bg-color text-white'}>Sort by Balance</option>
          </select>
        </div>
      </div>

      {/* PARTY LIST */}
      <div className="px-6 pb-10 space-y-4">
        {filteredParties.map((party) => (
          <motion.div
            key={party.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`px-5 py-4 rounded-lg border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition ${cardBg} ${cardHover}`}
          >
            {/* LEFT */}
            <div>
              <h3 className="text-lg font-semibold">{party.name}</h3>
              <p
                className={`text-sm ${subtleText}`}
              >
                Created on {party.createdAt}
              </p>
            </div>

            {/* MIDDLE (BALANCE) */}
            <div
              className={`text-lg font-bold ${party.balance >= 0 ? 'text-green-500' : 'text-rose-500'
                }`}
            >
              ₹ {party.balance.toLocaleString()}
            </div>

            {/* RIGHT ACTIONS - Reverted to original subtle border styles */}
            <div className="flex gap-3">
              {/* Prev Payments */}
              <button
                className={`px-4 py-2 rounded-md text-sm flex items-center gap-2 border transition ${isLight
                    ? 'border-gray-300 hover:bg-gray-100'
                    : 'border-gray-700 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                <IndianRupee className="w-4 h-4" />
                Prev Payments
              </button>

              {/* Pay */}
              <button
                className={`px-4 py-2 rounded-md text-sm flex items-center gap-2 border transition ${isLight
                    ? 'border-gray-300 hover:bg-gray-100'
                    : 'border-gray-700 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                <IndianRupee className="w-4 h-4" />
                Pay
              </button>

              {/* Delete */}
              <button
                onClick={() => handleDeleteParty(party.id)}
                className={`px-4 py-2 rounded-md text-sm flex items-center gap-2 border transition ${isLight
                    ? 'border-gray-300 hover:bg-gray-100'
                    : 'border-gray-700 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </motion.div>
        ))}

        {filteredParties.length === 0 && (
          <p
            className={`text-center mt-10 ${subtleText}`}
          >
            No parties found.
          </p>
        )}
      </div>
    </section>
  );
}