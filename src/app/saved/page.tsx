'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import HelpSidebar from '../../components/HelpSidebar'



export default function SavedPage() {

    const [help, setHelp] = useState<boolean>(false)
  
    
  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-stretch items-stretch overflow-hidden'>
        <Navbar setHelp={setHelp} help={help} active={3} />

          <div className='flex-1  w-full  flex justify-stretch items-stretch relative'>
            <div className={`absolute top-0 bottom-0 left-0   overflow-y-scroll pb-16 transition-all duration-700  bg-neutral-50 ${help ? 'right-96 border-r border-neutral-200' : 'right-0 border-transparent'}`}>
              <div className=' max-w-screen-lg mx-auto px-5 py-20 '>
                <h1 className='text-center text-3xl font-semibold text-main'>Check your saved properties</h1>
                <p className='text-center text-sm text-neutral-500 font-medium pt-2'>Get the most out of Brickbro</p>
                <div className='mt-16 w-full rounded-lg overflow-hidden'>
                </div>
              </div>
            </div>
          <HelpSidebar />

          </div>

      </div>
    </>
  )
}