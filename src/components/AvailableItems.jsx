import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
const AvailableItems = ({item}) => {
    console.log(item,'Players');
    
  return (
    <div className="grid grid-cols-3 gap-3 mt-6">
      {
       item.map((item)=>{
return <div className="card bg-base-100 w-96 shadow-sm  ">
   
  {/* <figure>
  
    <img
      src={item.icon} className='w-12 h-12'
      alt="" />
  </figure> */}
  <div className="card-body">
   <div className="flex justify-between">
    <h3>{item.icon}</h3>
  
    <h3>{item.badge}</h3>
   </div>
    <h2 className="card-title font-jakartaSans font-bold text-[18px] text-black">{item.name}</h2>
    <p className='ptext  text-cm text-[12px] font-jakartaSans'>{item.description}</p>
<div className='flex justify-between'>
  <h5>{item.category}</h5>
  <h5>{item.difficulty}</h5>
  <div className="flex gap-x-1.5 " > <h5 className='mt-1 text-amber-300'>{ <FaStar />}</h5><h5>{item.rating}</h5></div>

 
</div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary px-[100px] m-auto bg-black rounded-[10px]">Add To Stack</button>
    </div>
  </div>
</div>

 
       }

       )
      }
        
    </div>
  )
}

export default AvailableItems
