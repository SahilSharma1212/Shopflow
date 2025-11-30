import ThemeContext from '@/app/_context/ThemeContext'
import { AlertTriangle } from 'lucide-react'
import React, { useContext } from 'react'

export default function SuccessMessage() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme == 'light' ? 'bg-green-100' : 'bg-green-800/30 text-green-400' } p-3 rounded-lg flex items-center justify-start gap-3`}>
        
        <AlertTriangle className='text-green-400/90'/>
        This Months target is complete !
    </div>
  )
}
