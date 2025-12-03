'use client'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Page() {
    const {inventoryId} = useParams();
  return (
    <div>page : {inventoryId}</div>
  )
}
