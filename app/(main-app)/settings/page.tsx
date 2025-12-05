'use client';

import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeContext from '@/app/_context/ThemeContext';

export default function Page() {
  const [activeTab, setActiveTab] = useState<'personal' | 'settings'>('personal');

  // Toggle states
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [backup, setBackup] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);

  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`min-h-screen relative ${
        theme === 'light' ? 'bg-white text-black' : 'dark-bg-color text-white'
      }`}
    >

      {/* Header */}
      <header
        className={`border-b px-6 py-5 flex gap-5 items-center ${
          theme === 'light' ? 'border-gray-300' : 'border-gray-700'
        }`}
      >
        <div
          className={`w-20 h-20 flex items-center justify-center rounded-full text-3xl font-semibold ${
            theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          U
        </div>

        <div>
          <h2 className="text-2xl font-bold">Sahil Sharma</h2>
          <p
            className={`text-sm ${
              theme === 'light' ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            sahil@example.com
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div
        className={`flex border-b mt-2 ${
          theme === 'light' ? 'border-gray-300' : 'border-gray-700'
        }`}
      >
        <button
          onClick={() => setActiveTab('personal')}
          className={`px-6 py-3 text-sm font-medium relative ${
            activeTab === 'personal'
              ? theme === 'light'
                ? 'text-black'
                : 'text-white'
              : theme === 'light'
              ? 'text-gray-500'
              : 'text-gray-400'
          }`}
        >
          Personal Details
          {activeTab === 'personal' && (
            <motion.div
              layoutId="underline"
              className={`absolute left-0 right-0 h-[2px] bottom-0 ${
                theme === 'light' ? 'bg-black' : 'bg-white'
              }`}
            />
          )}
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`px-6 py-3 text-sm font-medium relative ${
            activeTab === 'settings'
              ? theme === 'light'
                ? 'text-black'
                : 'text-white'
              : theme === 'light'
              ? 'text-gray-500'
              : 'text-gray-400'
          }`}
        >
          Settings
          {activeTab === 'settings' && (
            <motion.div
              layoutId="underline"
              className={`absolute left-0 right-0 h-[2px] bottom-0 ${
                theme === 'light' ? 'bg-black' : 'bg-white'
              }`}
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
                {[
                  { label: 'Full Name', value: 'Sahil Sharma' },
                  { label: 'Email', value: 'sahil@example.com' },
                  { label: 'Phone', value: '+91 99999 99999' },
                  { label: 'Role', value: 'Admin' },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      className={`text-sm ${
                        theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                      }`}
                    >
                      {item.label}
                    </p>
                    <p className="text-lg font-medium">{item.value}</p>
                  </div>
                ))}
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
                {[
                  { label: "Enable Notifications", value: notifications, setter: setNotifications },
                  { label: "Dark Mode", value: darkMode, setter: setDarkMode },
                  { label: "Auto Backup", value: backup, setter: setBackup },
                  { label: "Email Alerts", value: emailAlerts, setter: setEmailAlerts }
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <p>{item.label}</p>

                    {/* Slider Toggle */}
                    <button
                      onClick={() => item.setter(!item.value)}
                      className={`
                        w-14 h-7 rounded-full flex items-center 
                        transition-all duration-200 px-1
                        ${theme === 'light' ? 'border border-black' : 'border border-gray-600'}
                        ${
                          item.value
                            ? theme === 'light'
                              ? 'bg-black justify-end'
                              : 'bg-white justify-end'
                            : theme === 'light'
                            ? 'bg-white justify-start'
                            : 'bg-black justify-start'
                        }
                      `}
                    >
                      <motion.div
                        layout
                        className={`
                          w-5 h-5 rounded-full transition-all duration-200
                          ${
                            item.value
                              ? theme === 'light'
                                ? 'bg-white'
                                : 'bg-black'
                              : theme === 'light'
                              ? 'bg-black'
                              : 'bg-white'
                          }
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
