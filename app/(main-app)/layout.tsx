'use client'
import React, { ReactNode, useContext } from 'react';
import Sidebar from './_components/sidebar';
import ThemeContext from '../_context/ThemeContext';
import MobileSidebar from './_components/mobileSidebar';

type LayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: LayoutProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex h-screen ${
        theme == 'light'
          ? 'bg-[#fbf8ff] scrollbar-light'
          : 'bg-black scrollbar-dark'
      } max-sm:flex-col max-sm:pb-16 overflow-hidden`}
    >
      <Sidebar />
      <MobileSidebar />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}