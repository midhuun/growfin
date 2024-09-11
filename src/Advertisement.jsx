import Card from './assets/card2.png';
import one from './assets/Group 597.png'
import two from './assets/Group 598.png'
import three from './assets/Group 599.png'
import four from './assets/Group 600.png'
import Logo1 from './assets/logo1.png';
import Logo2 from './assets/logo2.png';
import Logo3 from './assets/logo3.png';
export const Advertisement = () => {
  return (
    <>
    <div className='w-full py-5 px-[5%] flex justify-center items-center'>
        <p className='ad text-[48px] w-[60%] font-[700]'>What our Early Customers have Already Achieved</p>
    </div>
    <div className='flex justify-center px-[5%] gap-6'>
        <div className='w-[50%]'>
        <img className='object-cover' src={Card} />
        </div>
    <div className='flex mt-8 flex-col w-[50%] gap-6 items-center'>
   <div className='flex justify-between'>
    <p className=' flex w-[50%] gap-5 font-bold text-[50px]'> <span><img src={one}  /></span>95 %</p>
    <p className='text-[22px] w-[50%]'>Increase in same-day invoice posting </p>
   </div>
   <div className='h-[2px] w-full bg-[#767676]'></div>
   <div className='flex justify-between'>
    <p className=' flex w-[50%] gap-5 font-bold text-[50px]'> <span><img src={two}  /></span>70 %</p>
    <p className='text-[22px] w-[50%]'>Reduction in posting delays and errors </p>
   </div>
   <div className='h-[2px] w-full bg-[#767676]'></div>
   <div className='flex justify-between'>
    <p className=' flex w-[50%] gap-5 font-bold text-[50px]'> <span><img src={three}  /></span>75 %</p>
    <p className='text-[22px] w-[50%]'>Increase in automation for manual Cash Application </p>
   </div>
   <div className='h-[2px] w-full bg-[#767676]'></div>
   <div className='flex justify-between'>
    <p className=' flex w-[50%] gap-5 font-bold text-[50px]'> <span><img src={four}  /></span>100 %</p>
    <p className='text-[22px] w-[50%]'>Improvement in customer communication & experience</p>
   </div>
   <div className='h-[2px] w-full bg-[#767676]'></div>
    </div>
    </div>
    <div className='flex gap-6 px-[20%] pt-10 py-3 justify-between items-center'>
        <img className='h-[36px] object-contain w-[144px]' src={Logo1} />
        <img className=' object-contain w-[110px]' src={Logo2} />
        <img className=' object-contain w-[144px]' src={Logo3} />
    </div>
     <div className='relative mx-[30%] items-center flex justify-center'>
        <div className='flex justify-center w-[60%]   gap-1'>
        <div className='text-[130px] text-[#93c5fd]'>&#44;</div>
        <div className='text-[130px] text-[#93c5fd]'>&#44;</div>
        </div>
     </div>
     <div className='px-[10%] py-5 font-semibold text-[24px]'>
        <p>"Growfin’s Cash Application has helped us streamline the entire cash application process with less manual intervention & timely posting of payments. We were able to achieve one of our key objectives within months of going live."</p>
        <p className='pt-10 text-center font-semibold text-[18px]'>– Rohit Namboodiri, AR Manager, Locus</p>
     </div>

    </>
  )
}
