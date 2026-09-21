import React from 'react'
import Container from '../Container'
import Image from '../Image'
import logo from '/src/assets/Link.png'
const Bottom = () => {
  return (
    <>
   <Container>
   <div className="bg-gray-300 py-[100px] flex justify-between mt-5">
    <div className="">
<Image imgSrc={logo} className='font-bold font-jakartaSans text-[18px]'/>
<p className='w-[378px] font-jakartaSans text-[12px] text-cm leading-[19.5px]'>Curated tools, technologies, and resources for developers building
modern software.</p>
<div className="flex gap-x-3">
    <h6>GitHub</h6>
    <h6>Twitter</h6>
    <h6>LinkedIn</h6>
   
</div>
 <p>© 2026 Dev Stack. All rights reserved.</p>
    </div>
    <div className="">
        <h5 className='font-bold font-jakartaSans text-[12px]'>PRODUCT</h5>
        <p className='font-jakartaSans text-[12px] text-cm'>Home</p>
        <p className='font-jakartaSans text-[12px] text-cm'>Technologies</p>
        <p className='font-jakartaSans text-[12px] text-cm '>Projects</p>
    </div>
    <div className="">
        <h5 className='font-bold font-jakartaSans text-[12px]'>COMPANY</h5>
        <p className='font-jakartaSans text-[12px] text-cm'>About</p>
        <p className='font-jakartaSans text-[12px] text-cm'>Contact</p>
        <p className='font-jakartaSans text-[12px] text-cm'>Careers</p>
       
    </div>
    <div className="">
        <h5 className='font-bold font-jakartaSans text-[12px]'>LEGAL</h5>
        <p className='font-jakartaSans text-[12px] text-cm'>Privacy Policy</p>
        <p className='font-jakartaSans text-[12px] text-cm'>Terms of Service</p>
    </div>
   </div>
  
   </Container>
    </>
  )
}

export default Bottom