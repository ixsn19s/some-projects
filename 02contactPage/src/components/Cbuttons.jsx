import React from 'react'
import { RiMessage2Line } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Cbuttons = () => {
  return (
    <>
    

    <div className='flex gap-10 mt-10 mb-8'>

        <button onClick={() => alert("please contact us via support chat")} 
         className='flex bg-zinc-700 text-white rounded-md gap-4 items-center px-2 py-1 '>
        <RiMessage2Line />
        <p>VIA SUPPORT CHAT</p>
        </button>

        <button  onClick={() => alert("Please contact us via CALL")}
         className='flex bg-zinc-700 text-white rounded-md gap-4 items-center px-6 py-1'>
            <IoIosCall className='text-xl' />
            <p className='text-lg'>VIA CALL</p>

        </button>
    </div>
        

        
        <button  onClick={() => alert("Please contact us from Email")}
         className='flex font-semibold mt-4  mb-7 rounded-md gap-4 items-center px-28 py-1 border border-black text-center '>
            <MdEmail />
            <p>VIA EMAIL FORM</p>
        </button>
   

        
     </>
  )
}

export default Cbuttons