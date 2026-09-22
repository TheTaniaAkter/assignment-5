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
   
  
  <div className="flex justify-between">
     <img src={item.icon} alt="" className='w-9 ml-5 mt-5' />
      {/* <h3 >{item.badge}</h3> */}
      {/* ========================================= */}
      <span
  className={`px-3 py-1 text-[10px] font-medium mt-4 rounded-2xl pt-3
    ${
      item.badge === "Popular"
        ? "bg-blue-50 text-blue-500"
        : item.badge === "Versatile"
        ? "bg-green-50 text-green-500"
        : item.badge === "Fast"
        ? "bg-orange-50 text-orange-500"
        : item.badge === "SSR / Edge"
        ? "bg-purple-50 text-purple-500"
        : item.badge === "Robust"
        ? "bg-blue-50 text-blue-500"
        : item.badge === "Standard"
        ? "bg-green-50 text-green-500"
        : item.badge === "Top SQL"
        ? "bg-blue-50 text-blue-500"
        : item.badge === "Cache"
        ? "bg-red-50 text-red-500"
        : item.badge === "Ubiquitous"
        ? "bg-yellow-50 text-yellow-600"
        : item.badge === "Essential"
        ? "bg-blue-50 text-blue-500"
        : item.badge === "Modern"
        ? "bg-cyan-50 text-cyan-500"
        : item.badge === "Containers"
        ? "bg-blue-50 text-blue-500"
        : "bg-gray-50 text-gray-500"
    }`}
>
  {item.badge}
</span>
      {/* ================================================ */}
  </div>
  <div className="card-body">
   <div className="flex justify-between">
   
  
   
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
