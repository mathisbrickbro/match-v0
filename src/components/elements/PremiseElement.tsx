

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '../ui/input'
import {Label} from '../ui/label'

import { useState } from 'react'

export default function PremiseElement() {

  const [min, setMin] = useState<string>("30")
  const [max, setMax] = useState<string>("70")

  return (
    <div className='bg-white group-last:border-none border-b border-b-neutral-200 '>
      <div className='w-full px-6 mx-auto py-12 '>
        <div className='w-full grid grid-cols-2 gap-16 items-start'>
          <div>
            <p className='text-nor font-medium text-main'>Surface</p>
            <p className='text-sm text-neutral-500'>Add the target square meters of the desired premise</p>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label>Min</Label>
              <Input id="max" placeholder='100m2' className='w-full' value={min} onChange={(e)=>{setMin(e.target.value)}}/>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label>Min</Label>
              <Input id="max" placeholder='300m2' className='w-full' value={max} onChange={(e) => { setMax(e.target.value) }} />
            </div>
          </div>
        </div>
       
        <hr className='my-6' />

        <div className='w-full grid grid-cols-2 gap-16 items-start'>
          <div>
            <p className='text-nor font-medium text-main'>Licenses'</p>
            <p className='text-sm text-neutral-500'>Select the desired license the premise should have</p>
          </div>
          <div className='grid grid-cols-1 gap-2'>
            <Select value='ind'>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Indiferent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ind">Indiferent</SelectItem>
                <SelectItem value="1">C1</SelectItem>
                <SelectItem value="2">C2</SelectItem>
                <SelectItem value="3">C3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}