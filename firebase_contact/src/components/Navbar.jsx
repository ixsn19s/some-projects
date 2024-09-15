import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='bg-zinc-100 rounded-md p-3 '>
        <div className='flex justify-center gap-2'>
            <img className='h-9 w-7' src="./images/logos.png" alt="firebase ko logo" />
            <h1 className='text-2xl font-semibold'>Firebase Contact App</h1>
        </div>
    </div>
    </>
  )
}

export default Navbar