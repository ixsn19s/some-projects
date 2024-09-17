import React from 'react'
import { createPortal } from 'react-dom'
import {IoMdClose} from "react-icons/io"

const Modals = ( { onClose, isOpen, children}) => {
  return createPortal (
    <>
    {isOpen && (
      <>
        <div className='relative m-auto z-50 bg-white h-60 max-h-[240px] w-[360px] p-1 flex '>
           <div className=' flex justify-end '>
              <IoMdClose onClick={onClose} className='text-2xl cursor-pointer'/> 
           </div>
           {children}
        </div>

        <div className=' backdrop-blur h-screen w-full z-40 absolute top-0 ' />
        
      </>
    )}
    </>
  ,document.getElementById("modal-root")
  )
}

export default Modals


//In React, a portal allows you to render a child component into a different part of the DOM tree that is not a direct parent. This is useful for rendering components like modals, tooltips, or popups that need to be visually separated from their parent component.