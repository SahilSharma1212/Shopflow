import React from 'react'
import { LucideAArrowDown, LucideProps } from 'lucide-react'
interface buttonprops{
    text: string,
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}
export default function Button() {
  return (
    <div></div>
  )
}
