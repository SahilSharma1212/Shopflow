'use client'
import React, { ReactNode, useContext } from 'react';
import Sidebar from './_components/sidebar';
import ThemeContext from '../_context/ThemeContext';

type LayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: LayoutProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`flex max-h-screen ${theme == 'light' ? 'bg-[#fbf8ff]' : 'bg-black'}`}>
        <Sidebar/>
        {children}
    </div>
  );
}
