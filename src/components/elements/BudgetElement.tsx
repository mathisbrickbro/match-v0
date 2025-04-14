

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '../ui/input'
import { useState } from 'react'


export default function BudgetElement() {

  const [budget, setBudget] = useState<string>("1500")

  return (
    <div className='bg-white group-last:border-none border-b border-b-neutral-200 '>
      <div className='w-full px-6 mx-auto py-12 '>
        <div className='w-full grid grid-cols-2 gap-16 items-start'>
          <div>
            <p className='text-nor font-medium text-main'>Acquisition type </p>
            <p className='text-sm text-neutral-500'>Select what type of operation you feel more comfortable with</p>
          </div>
          <div className='grid grid-cols-1 gap-2'>
            <Select value='rent'>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Operation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="buy">Buy</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <hr className='my-6'/>

        <div className='w-full grid grid-cols-2 gap-16 items-start'>
          <div>
            <p className='text-nor font-medium text-main'>Budget</p>
            <p className='text-sm text-neutral-500'>Set the desired budget for the premise</p>
          </div>
          <div className='grid grid-cols-1 gap-2'>
            <Input placeholder='1.000€' className='w-full' value={budget} onChange={(e)=>{setBudget(e.target.value)}} />
          </div>
        </div>
       
      </div>
    </div>
  )
}