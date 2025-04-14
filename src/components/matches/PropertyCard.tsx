import { ImageIcon, Printer } from 'lucide-react';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { match } from 'assert';

export default function PropertyCard({match}: {match: any}) {

  var imageUrl = null

  const [showMore, setShowMore] = useState<boolean>(false)

  if (match.property.images?.length > 0) {
    imageUrl = `https://d6p6uajmnx48j.cloudfront.net/${match.property.images[0]}`
  }


  return (
    <div className='flex justify-start items-start gap-6' >
      <div className='w-60 h-48 min-h-60 min-w-48 bg-neutral-300 rounded-md relative overflow-hidden'>
        {
          imageUrl == null ?

            <div className='w-full h-full flex justify-center items-center'>
              <ImageIcon />
            </div>
            :
            <Image
              src={imageUrl}
              fill
              alt=""
              style={{ objectFit: 'cover', objectPosition: "center" }}
              className="w-full h-full"
            />
        }

      </div>
      <div className='mt-4 w-full'>
        <div className='w-full flex justify-between items-center'>
          <p className='font-medium'>Premise in {match.property.full_address}</p>
          <p className='font-medium'>{
          match.property.is_rent ? 
              new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 } ).format(match.property.rent_price) 
              :
             new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0}).format(match.property.sell_price) }
            {match.property.is_rent && <span className='text-sm font-normal'>/month</span>}
            </p>
        </div>
        <p className='text-neutral-600 text-sm'>{match.property.city}</p>

        <div className='flex justify-between items-center gap-2 flex-wrap mt-4'>
          <div className='flex justify-start items-center gap-2 flex-wrap'>
          <div className='text-sm bg-neutral-100 p-1 pl-2 rounded-md flex justify-center items-center gap-2'>
            <p>{match.property.full_area} m<sup>2</sup></p>
          </div>
          {
            match.property.is_corner && <div className='text-sm bg-neutral-100 p-1 pl-2 rounded-md flex justify-center items-center gap-2'>
              <p>Equinero</p>
            </div>
          }
          </div>
          <Button size={'sm'}>Descargar <Printer /></Button>
        </div>

        
        <hr className='my-4'></hr>

        <p className={` text-sm font-light ${showMore ? '' :'text-ellipsis overflow-hidden line-clamp-3'} `}>{match.property.description}</p>
        <Button variant={'link'} onClick={()=>{setShowMore(!showMore)}} className='p-0'> 
          {
                showMore ? 'Show less': 'Show more'
          }
          </Button>

        <div className='mt-4 flex justify-start items-start gap-2 flex-wrap'>
          {
            match.property.characteristics.map((character: string) => (
              <div key={character} className='text-xs bg-neutral-100 p-1 pl-2 font-medium rounded-full flex justify-center items-center gap-2'>
                {character}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}