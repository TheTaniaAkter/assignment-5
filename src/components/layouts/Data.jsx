import React from 'react'
import Image from '../Image'
import girl from '/src/assets/3.png'
const Data = ({dataImg}) => {
  return (
   
    <>
    <div className="w-1/4 p-4 mt-7">
    <Image imgSrc={dataImg} className={'w-full'}/>
    <div className="bg-black px-2 py-3 w-[80%] m-auto rounded-2xl">
        <h4 className='text-white'>Add to stack</h4>
    </div>
        </div>
    
    </>
  )
}

export default Data