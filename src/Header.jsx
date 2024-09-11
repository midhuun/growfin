import { lazy } from 'react'
import Logo from './assets/Logos.png';
import Card from './assets/card1.png'
export const Header = () => {
  return (
    <div className='header'>
    <div className="w-full py-3 border-[#cbd3f5] border-b flex items-center justify-between">
        <div className="h-12 w-[100px] mx-7  object-contain">
            <img src={Logo} alt='logo' loading={lazy} />
        </div>
        <div className="flex mx-7 gap-4">
        <button className='rounded-2xl flex items-center px-5 py-2  h-[38px] font-semibold hover:bg-white bg-[#05FFFF]'>Schedule a demo</button>
        <button className='rounded-2xl flex items-center px-5 py-2  h-[38px] font-semibold hover:bg-white border-[#05FFFF] border-2 text-[#05FFFF]'>Request Access</button>

        </div>
    </div>
     <div className='flex w-full  px-[5%] py-10 text-white justify-center gap-5'>
        <div className='w-[50%] flex flex-col gap-3'>
        <h1 className='text-[60px] font-[700]'>Real-Time Cash Application Software</h1>
        <p className='text-[20px]'>Radically minimize manual intervention and achieve same-day closure with Growfin’s ML-powered Cash Application that delivers accurate, touchless posting.</p>
        <div className='flex gap-6 py-5'>
        <button className='rounded-2xl flex items-center px-5 py-2  h-[38px] font-semibold hover:bg-white bg-[#05FFFF]'>Schedule a demo</button>
        <button className='rounded-2xl flex items-center px-5 py-2  h-[38px] font-semibold hover:bg-white border-[#05FFFF] border-2 text-[#05FFFF]'>Request Access</button>

        </div>
        </div>
        <div className='w-[50%]'>
            <img src={Card} className='object-cover' />
        </div>

     </div>
    </div>
  )
}
