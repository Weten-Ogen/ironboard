"use client"
import React from 'react'



const GeneralBtn = ({label,className,...props}:generalbtn
) => {
  return (
    <button  {...props}>
      {label}
    </button>
  )
}

export default generalbtn
