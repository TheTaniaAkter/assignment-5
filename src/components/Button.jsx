import React from 'react'

const Button = ({btnText,className,onClick,active}) => {
  return (
    <button onClick={onClick} className={` text-white transition ${active?"bg-gray-400":  "bg-[#D91B7E] hover:bg-gray-400" } ${className}`}>{btnText}</button>
  )
}

export default Button




