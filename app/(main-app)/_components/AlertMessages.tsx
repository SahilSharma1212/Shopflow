import { AlertTriangle } from 'lucide-react'
import React from 'react'

export default function AlertMessages() {
  return (
    <div className='bg-red-100 p-3 rounded-lg flex items-center justify-start gap-3'>
        
        <AlertTriangle className='text-red-400/90'/>
        AlertMessages, Short in stock.
    </div>
  )
}
