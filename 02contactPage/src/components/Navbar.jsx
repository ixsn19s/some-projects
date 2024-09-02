import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex justify-between items-center p-2'>
    <div>
        <img className='w-14 h-14' src="/images/logo.png" alt="" />
    </div>

    <ul className='flex gap-5'>
        <li className='text-lg font-semibold '>Home</li>
        <li className='text-lg font-semibold '>Contact</li>
        <li className='text-lg font-semibold '>Search</li>
        <li className='text-lg font-semibold '>About</li>
    </ul>
   </nav>
  )
}

export default Navbar