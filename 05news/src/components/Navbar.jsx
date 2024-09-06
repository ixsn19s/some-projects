import React from 'react'
import { GiNewspaper } from "react-icons/gi";

const Navbar = ({getData, handleInput, searchData}) => {
  return (
    <div>
      <nav className='bg-blue-400 py-4 flex justify-around'>
        <div className='flex text-[26px] font-bold gap-1'>
        <GiNewspaper className='text-4xl' />
        <h1 className=' '>The Sanjeev News</h1>
        </div>
        <ul className=''>
            <a className='text-[20px] font-medium mr-2'>What looking ?</a>
            <a className='text-[20px] font-medium'></a>
        </ul>

        <div className='flex gap-2'>
            <input onChange={handleInput}
            value={searchData}
             className='p-1 rounded-md text-lg outline-none'
             type="text"
              placeholder='Search News' />

            <button onClick={getData} 
            className='bg-blue-700 px-2 rounded-md text-white text-lg '>
            Search
            </button>
        </div>
      </nav>

     
    </div>
  )
}

export default Navbar