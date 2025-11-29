import { AlertTriangle } from 'lucide-react'
import React from 'react'

export default function SuccessMessage() {
  return (
    <div className='bg-green-100 p-3 rounded-lg flex items-center justify-start gap-3'>
        
        <AlertTriangle className='text-green-400/90'/>
        This Months target is complete !
    </div>
  )
}
