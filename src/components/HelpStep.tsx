

interface HelpStepProps {
  completed: boolean | null;
  current: boolean | null;
  title: string;
  description: string;
  id: number;
}

export default function HelpStep({
  title,
  description,
  id,
  completed = null,
  current = null
}: HelpStepProps) {
  return (
    <div className='flex justify-start items-start gap-4 group'>
      <div className='flex justify-start items-center flex-col h-full'>
        <div className='w-8 h-8 rounded-full flex justify-center items-center border border-neutral-300'>
          <p className='text-xs'>{id}</p>
        </div>
        <div className='h-full w-[1px] bg-neutral-300 flex-1 group-last:hidden'></div>
      </div>
      <div className='pb-8'>
        <p className='text-sm font-medium'>{title}</p>
        <p className='text-xs text-neutral-500 mt-1'>{description}</p>
      </div>
    </div>
  )
}