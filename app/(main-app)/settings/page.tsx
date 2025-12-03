'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Page() {
  const [activeTab, setActiveTab] = useState<'personal' | 'settings'>('personal');

  // Toggle states
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [backup, setBackup] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);

  return (
    <section className="min-h-screen relative bg-white text-black">

      {/* Header */}
      <header className="border-b px-6 py-5 flex gap-5 items-center">
        <div className="w-20 h-20 flex items-center justify-center bg-black text-white rounded-full text-3xl font-semibold">
          U
        </div>
        <div>
          <h2 className="text-2xl font-bold">Sahil Sharma</h2>
          <p className="text-sm text-gray-500">sahil@example.com</p>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex border-b mt-2">
        <button
          onClick={() => setActiveTab('personal')}
          className={`px-6 py-3 text-sm font-medium relative ${
            activeTab === 'personal' ? 'text-black' : 'text-gray-500'
          }`}
        >
          Personal Details
          {activeTab === 'personal' && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 h-[2px] bg-black bottom-0"
            />
          )}
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`px-6 py-3 text-sm font-medium relative ${
            activeTab === 'settings' ? 'text-black' : 'text-gray-500'
          }`}
        >
          Settings
          {activeTab === 'settings' && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 h-[2px] bg-black bottom-0"
            />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          
          {/* PERSONAL DETAILS */}
          {activeTab === 'personal' && (
            <motion.div
              key="personal"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold">Profile Information</h3>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="text-lg font-medium">Sahil Sharma</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-medium">sahil@example.com</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-medium">+91 99999 99999</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="text-lg font-medium">Admin</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* SETTINGS */}
          {activeTab === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold">App Settings</h3>

              <div className="space-y-6">

                {/* Toggle Component */}
                {[
                  { label: "Enable Notifications", value: notifications, setter: setNotifications },
                  { label: "Dark Mode", value: darkMode, setter: setDarkMode },
                  { label: "Auto Backup", value: backup, setter: setBackup },
                  { label: "Email Alerts", value: emailAlerts, setter: setEmailAlerts }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center"
                  >
                    <p>{item.label}</p>

                    {/* Slider Toggle */}
                    <button
                      onClick={() => item.setter(!item.value)}
                      className={`
                        w-14 h-7 rounded-full border border-black flex items-center 
                        transition-all duration-200 px-1
                        ${item.value ? 'bg-black justify-end' : 'bg-white justify-start'}
                      `}
                    >
                      <motion.div
                        layout
                        className={`
                          w-5 h-5 rounded-full 
                          transition-all duration-200
                          ${item.value ? 'bg-white' : 'bg-black'}
                        `}
                      />
                    </button>

                  </div>
                ))}

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
