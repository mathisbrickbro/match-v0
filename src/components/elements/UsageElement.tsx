

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export default function UsageElement() {
  return (
    <div className='bg-white group-last:border-none border-b border-b-neutral-200 '>
      <div className='w-full px-6 mx-auto py-12 '>
        <div className='w-full grid grid-cols-2 gap-16 items-start'>
          <div>
            <p className='text-nor font-medium text-main'>Usage type </p>
            <p className='text-sm text-neutral-500'>Select what type of usage the premise will serve</p>
          </div>
          <div className='grid grid-cols-1 gap-2'>
            <Select value='buy7'>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Usage type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rent">Restaurant</SelectItem>
                <SelectItem value="buy">Coffee shop</SelectItem>
                <SelectItem value="buy2">Clothing Store</SelectItem>
                <SelectItem value="buy3">Storage</SelectItem>
                <SelectItem value="buy4">Loft</SelectItem>
                <SelectItem value="buy5">Office</SelectItem>
                <SelectItem value="buy6">Garage</SelectItem>
                <SelectItem value="buy7">Laundry</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>       
      </div>
    </div>
  )
}