import {  PackageMinus, PackagePlus, Plus, UserLockIcon, X } from 'lucide-react'

export default function ActionsSection() {
  return (
    <section className="flex flex-col items-start justify-center gap-2 bg- w-full">
      <h3 className="text-xl font-semibold text-purple-500">Actions</h3>
      <div className="flex items-center justify-start w-full gap-4">

        
        <button
          className="bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors font-medium flex items-center justify-center gap-3"
        >
          Category
          <Plus strokeWidth={1.5} size={20}/>
        </button>

        <button
          className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-lg hover:bg-cyan-200 transition-colors font-medium flex items-center justify-center gap-3"
        >
          Sub-Category
          <Plus strokeWidth={1.5} size={20}/>
        </button>

        <button
          className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors font-medium flex items-center justify-center gap-3"
        >
          Restock
          <PackagePlus strokeWidth={1.5} size={20}/>
        </button>
        <button
          className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg hover:bg-orange-200 transition-colors font-medium flex items-center justify-center gap-3"
        >
          Remove items
          <PackageMinus strokeWidth={1.5} size={20}/>
        </button>
        <button
          className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors font-medium flex items-center justify-center gap-3"
        >
          Suppliers
          <UserLockIcon strokeWidth={1.5} size={20}/>
        </button>
        <button
          className="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors font-medium flex items-center justify-center gap-3"
        >
          Terminate
          <X strokeWidth={1.5} size={20}/>
        </button>
      </div>
    </section>
  )
}
