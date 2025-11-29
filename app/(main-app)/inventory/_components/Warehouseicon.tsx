'use client'
import { useRouter } from "next/navigation";
interface warehouseidProps{
  warehouseid: number;
}
export default function Warehouseicon(props:warehouseidProps) {
  const router = useRouter();
  const {warehouseid} = props;
  return (
    <section
    className='bg-white rounded-md p-3 border-purple-200 border shadow-lg shadow-purple-400/10'
    onClick={()=>router.push(`/inventory/${warehouseid}`)}
    >
      <p className=' font-medium text-lg mb-4'>Warehouse name</p>
      <div className='grid grid-cols-2 gap-3'>

        <div>
          <p className='text-blue-500'>Last Updated</p>
          <p className='text-gray-600'>19 mar 2024</p>
        </div>
        <div>

          <p className='text-pink-900'>SKUs</p>
          <p className='text-gray-600'>Total: 30</p>
        </div>
        <div>
          <p className='text-purple-800'>Categories</p>
          <p className='text-gray-600'>13 Main, 21 Sub</p>
        </div>
        <div>
          <p className='text-green-900'>Active Worth</p>
          <p className='text-gray-600'>30,000 Rs</p>
        </div>
      </div>
    </section>
  )
}
