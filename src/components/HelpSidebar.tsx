import { LifeBuoy } from 'lucide-react';
import HelpStep from './HelpStep';



export default function HelpSidebar() {
  
  return (
    <div className={`absolute top-0 bottom-0 h-full right-0 bg-white w-96 flex flex-col justify-between items-stretch -z-10 overflow-y-scroll`}>
      <div className='grid grid-cols-1 px-8 py-14'>
        <HelpStep title='Choose a location' description='Where do you want to focus your attention?' id={1} completed={null} current={null} />
        <HelpStep title='Choose a budget' description='How much do you want to spend?' id={2} completed={null} current={null} />
        <HelpStep title='Premise filtering' description='Filter the options you are looking for' id={3} completed={null} current={null} />
        <HelpStep title='Usage selection' description='What do you intend to use the premise for?' id={4} completed={null} current={null} />
        <HelpStep title='Additional information' description='Add any other detail to take into account' id={5} completed={null} current={null} />
      </div>
      <div className='px-8 py-8'>
        <LifeBuoy className='text-neutral-700' />
        <p className='text-sm font-medium mt-4'>Having trouble?</p>
        <p className='text-xs text-neutral-500 mt-2 pr-8'>Feel free to contact us and we will always help you through the process.</p>
        <button className='text-xs font-medium border border-neutral-200 px-3 py-2 rounded-md mt-6 shadow-md cursor-pointer'>Contact us</button>
      </div>
    </div>
  )
}