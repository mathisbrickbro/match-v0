import { ChevronDown, LifeBuoy } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

interface NavbarProps {
  help: boolean;
  setHelp: (value: boolean) => void;
  active: number | null;
}

export default function Navbar({
  help,
  setHelp,
  active
}: NavbarProps) {
  return (
    <div className='w-full border-b border-neutral-200'>
      <div className='px-5 flex justify-between items-center'>
        <div className='flex justify-start items-center gap-6 h-18'>
          <div className='relative h-8 w-32'>
            <Image
              src={"/logo.svg"}
              fill
              alt='Brickbro Logo'
              style={{ objectFit: 'contain', objectPosition: 'left' }}
              className='h-full w-full'
            />
          </div>
         
          <Link href={"/"} className={`text-main text-sm font-medium ml-8 cursor-pointer h-full rounded-md  flex flex-col justify-around items-stretch`}>
            <div className={`w-full h-1.5 `}></div>
            <div className='w-full flex-1 flex justify-center items-center'>
              <p>Search</p>
            </div>
            <div className={`w-full h-[2px] ${active == 1 ? 'bg-main' : 'bg-transparent'} `}></div>
          </Link>

          <Link href={"/matches"} className={`text-main text-sm font-medium cursor-pointer  h-full rounded-md  flex flex-col justify-around items-stretch`}>
            <div className={`w-full h-1.5 `}></div>
            <div className='w-full flex-1 flex justify-center items-center'>
              <p>Matches</p>
            </div>
            <div className={`w-full h-[2px] ${active == 2 ? 'bg-main' : 'bg-transparent'} `}></div>
          </Link>

          {/* <Link href={"/saved"} className={`text-main text-sm font-medium cursor-pointer h-full rounded-md  flex flex-col justify-around items-stretch`}>
            <div className={`w-full h-1.5 `}></div>
            <div className='w-full flex-1 flex justify-center items-center'>
              <p>Saved properties</p>
            </div>
            <div className={`w-full h-[2px] ${active == 3 ? 'bg-main' : 'bg-transparent'} `}></div>
          </Link> */}
        </div>
        <div className='flex justify-end items-center gap-2'>
          <button className='text-main font-medium text-sm cursor-pointer flex justify-center items-center gap-2 border border-neutral-200 px-3 py-2 rounded-md hover:bg-neutral-50 transition-colors duration-300'>
            <p>English</p>
            <ChevronDown size={16} />
          </button>
          <button className='text-main font-medium text-sm cursor-pointer flex justify-center items-center gap-2 border border-neutral-200 px-3 py-2 rounded-md hover:bg-neutral-50 transition-colors duration-300' onClick={() => { setHelp(!help) }}>Help <LifeBuoy size={16} /></button>
        </div>
      </div>

    </div>
  )
}