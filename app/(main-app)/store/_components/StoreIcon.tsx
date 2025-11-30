'use client';
import { useRouter } from "next/navigation";
import { useContext } from "react";
import ThemeContext from "@/app/_context/ThemeContext";

interface StoreIconProps {
  storeid: number;
}

export default function StoreIcon({ storeid }: StoreIconProps) {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  return (
    <section
      onClick={() => router.push(`/store/${storeid}`)}
      className={`rounded-md p-3 border shadow-lg flex flex-col cursor-pointer hover:-translate-y-1.5 hover:scale-105 transition-all gap-3
        ${theme === "light"
          ? "bg-white border-purple-200 shadow-purple-400/10 text-gray-800"
          : "bg-gray-800 border-gray-700 shadow-purple-900/5 text-gray-200"
        }`}
    >
      <p className="font-medium text-lg mb-2">Store Name</p>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-gray-400">Last Updated</p>
          <p className={theme === "light" ? "text-gray-600" : "text-gray-300"}>19 Mar 2024</p>
        </div>
        <div>
          <p className="text-gray-400">ID</p>
          <p className={theme === "light" ? "text-gray-600" : "text-gray-300"}>{storeid}</p>
        </div>
      </div>
    </section>
  );
}
