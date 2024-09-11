import React, { useState } from 'react'
import { items } from './items'
import Vector from './assets/Vector.png'
import Hundred from './assets/100.png';
export const ItemsMap = () => {
  const [active,setActive] = useState(items[0]);
  return (
    <>
    <div className='flex gap-[80px] text-[16px]  px-5'>
    {items.map((item)=>{
        return(
            <div onClick={()=>setActive(item)} className={`flex cursor-pointer gap-[100px] font-semibold use ${active.id === item.id ?"border-[#204ad1] border-b-[4px]":""}  py-2`}>
                {item.name}
            </div>
        )
    })}
    </div>
    <div className='flex justify-between gap-10'>
      <div className='w-[35%] py-10'>
        <p className='text-[30px] font-bold'>{active.slogan}</p>
        <p className='py-5 font-medium'>{active.description}</p>
        <div className='flex px-3 leading-6  gap-5 items-center py-5'>
          <div>
            <img className='h-[30px] w-[30px] object-contain' src={Vector} />
            <p className=''>Integrates with all other banks</p>
          </div>
          <hr />
          <div>
            <img className='h-[45px] w-[45px] object-contain' src={Hundred} />
            <p className=''>Identification of all transactions</p>
          </div>
        </div>
        </div>
      <div className='w-[65%] flex items-center justify-center bg-[#c4b5fd]'>
        <img className='w-[500px] h-[600px] object-contain' src={active.image} />
      </div>
    </div>

    </>
  )
}
