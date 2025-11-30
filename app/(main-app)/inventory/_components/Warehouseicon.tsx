'use client'
import ThemeContext from "@/app/_context/ThemeContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface warehouseidProps {
  warehouseid: number;
}

export default function Warehouseicon({ warehouseid }: warehouseidProps) {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  return (
    <section
      onClick={() => router.push(`/inventory/${warehouseid}`)}
      className={`
        rounded-md p-3
        border shadow-lg h-36
        ${theme === 'light'
          ? 'bg-white border-purple-200 shadow-purple-400/10 text-gray-800'
          : 'bg-gray-800 border-gray-800 shadow-purple-900/10 text-gray-200'}
      `}
    >
      <p className='font-medium text-lg mb-4'>Warehouse name</p>
      <div className='grid grid-cols-2 gap-3'>
        <div>
          <p className='text-gray-400'>Last Updated</p>
          <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>19 mar 2024</p>
        </div>
        <div>
          <p className='text-gray-400'>Id</p>
          <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>{warehouseid}</p>
        </div>
      </div>
    </section>
  );
}
