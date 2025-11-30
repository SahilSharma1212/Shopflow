import ThemeContext from '@/app/_context/ThemeContext'
import { DiamondMinusIcon } from 'lucide-react'
import { useContext } from 'react'

export default function ReminderMessage() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme == 'light' ? 'bg-yellow-100' : 'bg-yellow-800/30  text-yellow-400'} p-3 rounded-lg flex items-center justify-start gap-3`}>
        
        <DiamondMinusIcon className='text-yellow-600/90'/>
        Defective item SKU202930 is yet to return ! 
    </div>
  )
}
