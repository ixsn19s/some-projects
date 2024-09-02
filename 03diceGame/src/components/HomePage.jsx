import React from 'react'

const HomePage = ({ toggle }) => {
  return (
    <>
    <div className='w-5/6 h-screen m-10 flex items-center justify-evenly '>

        <div className=''>
            <img src="/images/dices.png" alt="" />
        </div>
        <div className='w-1/2'>
            <h1 className='text-6xl uppercase'>
                Dice game
            </h1>
            <button onClick={toggle}
             className='bg-zinc-800 mt-3 text-white px-8 py-1 rounded text-lg hover:bg-white border hover:border-black hover:outline-none hover:text-black hover:transition hover:duration-300 hover:ease-out  '>
                Play Now
            </button>
        </div>
    </div>
    </>

  )
}

export default HomePage