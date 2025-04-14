'use client'

import { useEffect, useState } from 'react';
import CategoryCard from '@/components/CategoryCard';
import { Combine, DollarSign, LucideLocateFixed, ShoppingBag, Store } from 'lucide-react';
import Navbar from '../components/Navbar';
import LocationElement from '../components/elements/LocationElement';
import HelpSidebar from '../components/HelpSidebar';
import BudgetElement from '../components/elements/BudgetElement';
import UsageElement from '../components/elements/UsageElement';
import PremiseElement from '../components/elements/PremiseElement';
import CharacteristicsElement from '../components/elements/CharacteristicsElement';

import { GetMatches } from "@/hooks/useUserMatches"

export default function Home() {

  const [help, setHelp] = useState<boolean>(false)
  const [data, setData] = useState<any | null>(null)
  const [openElement, setOpenElement] = useState<number | null>(null)

  useEffect(() => {
    GetMatches().then((_data) => {
      console.log(_data)
      setData(data)
    })
  }, [])


  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-stretch items-stretch overflow-hidden'>

        <Navbar setHelp={setHelp} help={help} active={1} />

        <div className='flex-1  w-full  flex justify-stretch items-stretch relative'>
          <div className={`absolute top-0 bottom-0 left-0   overflow-y-scroll pb-16 transition-all duration-700  bg-neutral-50 ${help ? 'right-96 border-r border-neutral-200' : 'right-0 border-transparent'}`}>
            <div className=' max-w-screen-md mx-auto px-5 py-20 '>
              <h1 className='text-center text-3xl font-semibold text-main'>Setup your Matching rules</h1>
              <p className='text-center text-sm text-neutral-500 font-medium pt-2'>Get the most out of Brickbro</p>
              <div className='mt-16 w-full bg-white border border-gray-200 rounded-lg overflow-hidden'>
                <CategoryCard
                  id={1}
                  title='Location'
                  description='Provide the zone in which you are interested to find premises'
                  icon={<LucideLocateFixed className='w-full h-full text-accent' />}
                  setOpenElement={setOpenElement}
                  openElement={openElement}
                  internal_element={<LocationElement data={data} />}
                />
                <CategoryCard
                  id={2}
                  title='Budget'
                  description='Provide the information of your budget'
                  icon={<DollarSign className='w-full h-full text-accent' />}
                  setOpenElement={setOpenElement}
                  openElement={openElement}
                  internal_element={<BudgetElement />}
                />
                <CategoryCard
                  id={3}
                  title='Premise'
                  description='Set the premise filtering options'
                  icon={<Store className='w-full h-full text-accent' />}
                  setOpenElement={setOpenElement}
                  openElement={openElement}
                  internal_element={<PremiseElement />}
                />
                <CategoryCard
                  id={4}
                  title='Usage'
                  description='Provide the intended usage for the premise'
                  icon={<ShoppingBag className='w-full h-full text-accent' />}
                  setOpenElement={setOpenElement}
                  openElement={openElement}
                  internal_element={<UsageElement />}
                />
                <CategoryCard
                  id={5}
                  title='Characteristics'
                  description='Provide additional characteristics you are looking for'
                  icon={<Combine className='w-full h-full text-accent' />}
                  setOpenElement={setOpenElement}
                  openElement={openElement}
                  internal_element={<CharacteristicsElement />}
                />
              </div>
            </div>
          </div>
          <HelpSidebar />
        </div>
      </div >
    </>
  );
}
