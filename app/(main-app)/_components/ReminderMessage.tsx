import { DiamondMinusIcon } from 'lucide-react'

export default function ReminderMessage() {
  return (
    <div className='bg-yellow-100 p-3 rounded-lg flex items-center justify-start gap-3'>
        
        <DiamondMinusIcon className='text-yellow-600/90'/>
        Defective item SKU202930 is yet to return ! 
    </div>
  )
}
