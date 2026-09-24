import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '/src/assets/Link.png'
import Button from '../Button'
import toast from 'react-hot-toast'

const Header = () => {
  return (
  <>
<div className="bg-white py-4 sticky top-0 z-50">
    <Container>
<Flex className={'justify-between'}>
   <div className="">
    <Image imgSrc={logo}/>
   </div>
   <div className="">
    <ul className=' hidden md:flex gap-x-4 font-jakartaSan text-cc font-medium text-[14px] '>
    <li>Home</li>
     <li>Technologies</li>
      <li>Projects</li>
       <li>About</li>
        <li>Contact</li>
    </ul>
   </div>
    <div className="">
      <div className="flex gap-3">
        <Button onClick={()=>toast.success('Successfully toasted!')} className={"px-4 py-2 rounded-3xl text-white"} btnText={"Sign In"}/>
        <Button className={"px-4 py-2 rounded-3xl text-white"} btnText={"Sign Up"}/>
      </div>
    </div>
</Flex>

    </Container>
</div>

  </>
  )
}

export default Header