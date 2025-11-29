import React, { ReactNode } from 'react';
import Sidebar from './_components/sidebar';

type LayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#fbf8ff]">
        <Sidebar/>
        {children}
    </div>
  );
}
