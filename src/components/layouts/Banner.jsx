import React from 'react'
import Container from '../Container'
import Image from '../Image'
import bannerPic from '/src/assets/Hero Isometric 3D Graphic Column.png'
import Flex from '../Flex'
import Button from '../Button'
const Banner = () => {
  return (
    <>
    <div className="bg-white py-[100px]">
       <Container>
       <Flex className={'justify-between'}>
   <div className="">
    <h1 className='font-interSans font-extrabold text-[60px] leading-[60px]'> Build Your Ideal <br />
 <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h1>
<p className='font-jakartaSans font-light text-[18px] w-[571px] text-cc leading-[29.3px] mt-6'>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
 <div className="mt-4 flex gap-x-4 ">
     <Button className={'px-5 py-3 rounded-2xl  bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white font-semibold font-interSans text-[14px]'} btnText={"Explore Technologies"}/>
     <Button className={'px-12 py-3 rounded-2xl text-white bg-gradient-to-r from-[#F97316] to-[#EC4899]'} btnText={'Learn More'}/>
 </div>
   </div>
   <div className="w[100%]">
    <Image imgSrc={bannerPic}/>
   </div>

   
       </Flex>

       </Container>
    </div>
    </>
  )
}

export default Banner
