'use client'

import { JSX } from 'react';
import { ChevronDown, ChevronUp, LucideLocateFixed } from 'lucide-react';


interface CategoryCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  internal_element: JSX.Element;
  openElement: number | null;
  setOpenElement: (value: number | null) => void;
  id: number;
}

  export default function CategoryCard({
    title,
    description,
    icon,
    openElement,
    internal_element,
    setOpenElement,
    id
}: CategoryCardProps) {
  return (
    <>
    <div className='group grid grid-cols-1'>
        <div className={`w-full py-6 px-6 flex justify-between items-center gap-8 cursor-pointer hover:bg-neutral-50 ${openElement == 5 ? 'border-b border-b-gray-200': ' group-last:border-none border-b border-b-gray-200'}`} onClick={() => { 
          if (id != openElement) { setOpenElement(id) }  
          if (id == openElement) { setOpenElement(null) }
        }}>
          <div className='flex justify-start items-center gap-4'>
            <div className='w-12 h-12 bg-main rounded-md flex items-center justify-center relative p-3'>
              {icon}
            </div>
            <div>
              <p className='text-main font-semibold'>{title}</p>
              <p className='text-sm text-neutral-500'>{description}</p>
            </div>
          </div>
          <div>
            {
              openElement == id ? <ChevronUp /> : <ChevronDown />
            }
          </div>
        </div>
        {
          openElement == id &&
            <>
            {internal_element}
            </>
          
        }
    </div>
      
    </>
  )
}