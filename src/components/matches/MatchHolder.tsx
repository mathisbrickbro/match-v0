import { ImageIcon, LoaderCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { GetMatches } from '../../hooks/useUserMatches';

import { Matches } from '@/lib/matches'
import Image from 'next/image';
import PropertyCard from './PropertyCard';

export default function MatchHolder() {

  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(()=> {
    GetMatches().then((response) => {
      console.log(response)
      setTimeout(()=> {
        setProperties(Matches.items.rows)
        setLoading(false)
      }, 2000)
    })
  }, [])

  return (
    <>
    {
      loading ?
      <div className='p-4 flex justify-center items-center'>
        <LoaderCircle className='animate-spin' />
      </div>
      :
      <div className='p-4'>
        {
          properties.length == 0 ?
          <p className='text-sm font-medium text-neutral-600'>No matches found</p> 
          : 
          <div className='grid grid-cols-1 gap-8'>
            {
              properties.map((match, index) => (
                <PropertyCard match ={match} key={index}/>
              ))
            }
          </div>
        }
      </div>

    }
    </>
  )
}