import React from 'react'
import Container from '../Container'
import Image from '../Image'
import logo from '/src/assets/Link.png'
const Bottom = () => {
  return (
    <>
   <Container>
   <div className="py-[100px] flex justify-between mt-5">
     <div className="">
<Image imgSrc={logo} className='font-bold font-jakartaSans text-[18px]'/>
<p className='w-[378px] font-jakartaSans text-[12px] text-cm leading-[19.5px]'>Curated tools, technologies, and resources for developers building
modern software.</p>
<div className="flex gap-x-3 pt-4">
    <h6>GitHub</h6>
    <h6>Twitter</h6>
    <h6>LinkedIn</h6>
   
</div>
<p className='mt-24 font-jakartaSans text-[12px] text-cm'>© 2026 Dev Stack. All rights reserved.</p>
    </div>
    <div className="">
        <h5 className='font-bold font-jakartaSans text-[12px] pb-3'>PRODUCT</h5>
        <p className='font-jakartaSans text-[12px] text-cm pb-2'>Home</p>
        <p className='font-jakartaSans text-[12px] text-cm pb-2'>Technologies</p>
        <p className='font-jakartaSans text-[12px] text-cm '>Projects</p>
    </div>
    <div className="">
        <h5 className='font-bold font-jakartaSans text-[12px] pb-3'>COMPANY</h5>
        <p className='font-jakartaSans text-[12px] text-cm pb-2'>About</p>
        <p className='font-jakartaSans text-[12px] text-cm pb-2'>Contact</p>
        <p className='font-jakartaSans text-[12px] text-cm '>Careers</p>
       
    </div>
    <div className="">
        <h5 className='font-bold font-jakartaSans text-[12px] pb-3'>LEGAL</h5>
        <p className='font-jakartaSans text-[12px] text-cm pb-2'>Privacy Policy</p>
        <p className='font-jakartaSans text-[12px] text-cm pb-10'>Terms of Service</p>
       <div className="flex gap-x-3 mt-24 font-jakartaSans text-[12px] text-cm">
         <p>Privacy</p>
        <p>Terms</p>
       </div>
    </div>

   </div>

   </Container>
    </>
  )
}

export default Bottom