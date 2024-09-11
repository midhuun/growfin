import React from 'react';
import One from './assets/Group421.svg';
import Two from './assets/Group422.svg';
import Three from './assets/Group423.svg';
import Four from './assets/Group425.svg';
import Company1 from './assets/c1.png';
import Company2 from './assets/c2.png';
import Company3 from './assets/c3.png';
import { ItemsMap } from './itemsMap';
export const  Uses= () => {
  return (
    <>
    <div className='bg-[#e4fdff]'>
    <div className=' flex gap-5 items-center px-2 py-7 justify-between'>
        <p className='use w-[40%] font-bold text-[46px]'>Experience Cash Application Perfection</p>
        <p className='text-[20px] w-[60%]' >Achieve touchless cash application to enable faster and accurate financial reporting for your business and a better experience for your customers.</p>
    </div>
    <div className='flex my-5 gap-4'>
        <div className='w-[25%]  bg-white flex flex-col  gap-4 '>
            <img className='h-[70px] w-[70px] ml-6 my-3' src={One} />
            <p className='mx-3 text-[22px] font-bold'>Automate Cash Application</p>
            <p className='mx-3 my-2 '>Auto-match payments and extract remittances from even unstructured data, and achieve straight-through posting.</p>
        </div>
        <div className='w-[25%] bg-white flex flex-col gap-4 '>
        <img className='h-[70px] w-[70px] ml-6 my-3' src={Two} />
        <p className='mx-3 text-[22px] font-bold'>Achieve Exceptional Accuracy</p>
        <p className='mx-3 my-2'>Ensure precise payment matching, even with partial or overpayments, to reduce posting errors and compliance nightmares.</p>
        </div>
        <div className='w-[25%] bg-white flex flex-col gap-4 '>
        <img className='h-[70px] w-[70px] ml-6 my-3' src={Three} />
        <p className='mx-3 text-[22px] font-bold'>Deliver Real-time Visibility</p>
        <p className='mx-3 my-2'>Gain real-time visibility into cash flow and AR aging to optimize collection strategies and improve forecasting accuracy.</p>
        </div>
        <div className='w-[25%] bg-white flex flex-col gap-4 '>
        <img className='h-[70px] w-[70px] ml-6 my-3' src={Four} />
        <p className='mx-3 text-[22px] font-bold'>Enhance Customer Experience</p>
        <p className='mx-3 my-2'>Avoid disputes, incorrect follow-ups and improve customer satisfaction with real-time, touchless cash applications.</p>
        </div>
    </div>
    <div className='flex justify-center gap-6 py-5'>
        <button className='rounded-2xl flex items-center px-5 py-2  h-[58px] font-semibold text-white bg-[#7c3aed]'>Schedule a demo</button>
        <button className='rounded-2xl flex items-center px-5 py-2  h-[58px] font-semibold hover:bg-white border-[#7c3aed] border-2 text-[#7c3aed]'>Request Access</button>

        </div>
    </div>
    <div className=' flex gap-5 items-center my-5 justify-between'>
        <p className='use w-[40%] font-bold text-[46px]'>Transform Your Cash Application Process</p>
        <p className='text-[20px] w-[60%]' >Achieve touchless posting for 90% of payments while still retaining control over exceptions that need a little extra human touch.</p>
    </div>
    <ItemsMap />
    <div className=' flex flex-col gap-5 items-center my-[150px] justify-center'>
        <p className='use w-[60%] text-center font-bold text-[46px]'>Secure, Seamless, and Scalable Cash Application</p>
        <p className='text-[20px] py-4 w-[60%] text-center' >Integrate seamlessly with all your banks and ERP, and keep your auditors happy with state-of-the-art compliance and security measures.</p>
    </div>
    <div>

    <div className='flex  py-7  gap-8'>
       <p className='text-[32px] text-nowrap  font-bold w-[35%]'>Tight ERP Integration</p>
       <div className='border-b-2 w-[65%] py-4 flex border-black'>
       <p className=' font-medium w-[50%] text-[18px]'>Keep your books accurate and up-to-date, and the auditors at bay with a seamless 2-way integration with your ERP.</p>
       <div className='flex gap-4 w-[50%]'>
        <img className=' pl-6 object-contain w-[300px]' src={Company1} />
       </div>
    </div>
    </div>
    <div className='flex  py-7 justify-between gap-8'>
       <p className='text-[32px] text-nowrap  font-bold w-[35%]'>Unmatched Security </p>
       <div className='border-b-2 w-[65%] flex py-4 border-black'>
       <p className=' font-medium w-[50%] text-[18px]'>Stay confident and compliant with software that’s approved by the world’s most trusted certifications.</p>
       <div className='flex gap-4 w-[50%]'>
            <img className=' pl-6 object-contain h-[50px] w-[300px]' src={Company3} />
       </div>
    </div>
    </div>
    <div className='flex  py-7 justify-between gap-8'>
       <p className='text-[32px] text-nowrap  font-bold w-[35%]'>Wide Bank Coverage</p>
       <div className='border-b-2 flex w-[65%] py-4 border-black'>
       <p className=' font-medium w-[50%] text-[18px]'>Out-of-the-box connection to all your bank accounts across geographies to read payments in real-time.</p>
       <div className='flex gap-4 w-[50%]'>
       <img className=' pl-6 object-contain h-[50px] w-[300px]' src={Company2} />
       </div>
    </div>
    </div>
    </div>
    <div className=' use2 flex flex-col items-center text-white h-[400px] text-center justify-center gap-6 py-5'>
        <p className='w-[60%] text-[50px] font-bold'>Embrace the Future of Cash Application Today</p>
        <div className='flex gap-5'>
        <button className='rounded-2xl flex items-center px-5 py-2 w-[200px] h-[48px] text-black font-semibold hover:bg-white bg-[#05FFFF]'>Schedule a demo</button>
        <button className='rounded-2xl flex items-center px-5 py-2 w-[200px]  h-[48px] font-semibold hover:bg-white border-[#05FFFF] border-2 text-[#05FFFF]'>Request Access</button>

          </div>

        </div>
    </>
  )
}
