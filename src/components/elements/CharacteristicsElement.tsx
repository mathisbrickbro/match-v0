
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { X } from 'lucide-react'
import { useState } from 'react'


export default function CharacteristicsElement() {

  const [tags, setTags] = useState<string[]>(["accessibility", "open_space", "smoke_exit", "showcase", "corner"])

  const USAGE_FEATURES = [
    { key: "street_level", label: "Street Level" },
    { key: "accessibility", label: "Accessibility" },
    { key: "air_conditioning", label: "Air Conditioning" },
    { key: "storage", label: "Storage" },
    { key: "elevator", label: "Elevator" },
    { key: "bathroom", label: "Bathroom" },
    { key: "heating", label: "Heating" },
    { key: "kitchen", label: "Kitchen" },
    { key: "open_space", label: "Open Space" },
    { key: "good_condition", label: "Good Condition" },
    { key: "mall", label: "In a Shopping Center" },
    { key: "showcase", label: "Showcase" },
    { key: "corner", label: "Corner" },
    { key: "parking", label: "Parking" },
    { key: "exterior", label: "Exterior" },
    { key: "to_renovate", label: "To Renovate" },
    { key: "inner_courtyard", label: "Inner Courtyard" },
    { key: "first_floor", label: "First Floor" },
    { key: "security_door", label: "Security Door" },
    { key: "emergency_exit", label: "Emergency Exit" },
    { key: "smoke_exit", label: "Smoke Exit" },
    { key: "second_floor", label: "Second Floor" },
    { key: "security", label: "Security" },
    { key: "alarm_system", label: "Alarm System" },
    { key: "basement", label: "Basement" },
    { key: "third_floor", label: "Third Floor" },
    { key: "terrace", label: "Terrace" },
    { key: "touristic", label: "Touristic" },
    { key: "driveway", label: "Driveway" },
    { key: "high_traffic", label: "High Traffic Area" }
  ]

  const toggleTag = (key: string) => {
    setTags((prev) =>
      prev.includes(key) ? prev.filter((t) => t !== key) : [...prev, key]
    )
  }

  return (
    <div className='bg-white group-last:border-none border-b border-b-neutral-200 '>
      <div className='w-full px-6 mx-auto py-12 '>
        <div className='w-full grid grid-cols-2 gap-16 items-start'>
          <div>
            <p className='text-nor font-medium text-main'>Property Characteristics </p>
            <p className='text-sm text-neutral-500'>Add any characteristic you would like us to take into account</p>
          </div>
          <div className='grid grid-cols-1 gap-2'>
            <Select onValueChange={(value) => { toggleTag(value) }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a new characteristic" />
              </SelectTrigger>
              <SelectContent>
                {USAGE_FEATURES.map(({ key, label }, index) => (
                  <SelectItem value={key} key={index}>{label}</SelectItem>
                ))
                }
              </SelectContent>
            </Select>

            <div className='mt-6 flex justify-start items-start gap-2 flex-wrap'>
              {
                tags.map((key) => {
                  const item = USAGE_FEATURES.find((i) => i.key === key)

                  return (
                  <div key={key} className='text-xs bg-neutral-100 p-2 pl-3 font-medium rounded-full flex justify-center items-center gap-2'>
                      {item?.label || key}
                      <button onClick={()=>{toggleTag(key)}} className='p-1 bg-neutral-200 hover:bg-neutral-500 rounded-full cursor-pointer hover:text-white'>
                          <X size={12} />
                      </button>
                  </div>
                  )
                })
              }
            </div>
          </div>
        </div>   
      </div>
    </div>
  )
}