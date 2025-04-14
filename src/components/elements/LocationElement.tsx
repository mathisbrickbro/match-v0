
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import MapView from '../map/MapView'


export default function LocationElement({data}: {data: any}) {

  const [searchType, setSearchType] = useState<string>("3")

  console.log(data)

  return (
    <div className='bg-white group-last:border-none border-b border-b-neutral-200 '>
      <div className='w-full px-6 mx-auto py-12 '>

        <div className='w-full grid grid-cols-2 gap-16 items-start'>
          <div>
            <p className='text-nor font-medium text-main'>Search type</p>
            <p className='text-sm text-neutral-500'>Select the desired search type</p>
          </div>
          <div className='grid grid-cols-1 gap-2'>
            <Select onValueChange={(value) => { setSearchType(value) }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Draw on map" />
              </SelectTrigger>
              <SelectContent >
                <SelectItem value="1">Spain</SelectItem>
                <SelectItem value="2">Filter by city</SelectItem>
                <SelectItem value="3">Draw on map</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {
          searchType != "1" &&
          <hr className='my-6' />
        }
        

        {
          searchType == "2" &&
          <div className='w-full grid grid-cols-2 gap-16 items-start'>
            <div>
              <p className='text-nor font-medium text-main'>Location</p>
              <p className='text-sm text-neutral-500'>Select the desired cities to match properties with</p>
            </div>
            <div className='grid grid-cols-1 gap-2'>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bcn">Barcelona</SelectItem>
                  <SelectItem value="mad">Madrid</SelectItem>
                  <SelectItem value="sab">Sabadell</SelectItem>
                </SelectContent>
              </Select>

              <div className='flex'>
                <Button variant={'ghost'} className='flex-start cursor-pointer'><Plus /> Add another city</Button>

              </div>

            </div>

          </div>
        }
        
        {
          searchType == "3" &&
          <>
            <div className='h-96 w-full overflow-hidden'>
                <MapView />
            </div>
          </>
        }


        <hr className='my-6'/>
        <p className='text-sm text-neutral-500 mt-5'>We currently only support one search at a time, if you need matches and searches with multiple locations and conditions please contact us.</p>
      </div>
    </div>
  )
}