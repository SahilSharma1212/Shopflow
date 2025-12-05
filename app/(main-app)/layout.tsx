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
      className={`flex h-screen overflow-y-auto ${
        theme == 'light'
          ? 'bg-[#ffffff] custom-scroll'
          : 'bg-[rgb(13,13,13)] custom-scroll-dark'
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