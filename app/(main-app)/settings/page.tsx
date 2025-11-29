// app/home/page.tsx
"use client";

import { Settings } from "lucide-react";

export default function SettingsPage() {

  return (
    <main className="min-h-screen py-2 px-1 w-full">

      <div className="h-full w-full p-4 bg-white shadow-2xl/15 rounded-lg flex items-center justify-center gap-5">

        <Settings className="text-purple-700" size={40}/>
        <span className="font-bold text-3xl bg-linear-to-r from-purple-700 to bg-purple-600 text-transparent bg-clip-text p-2">Settings</span>
      
      </div>
    </main>
  );
}
