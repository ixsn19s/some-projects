import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
    <div className='w-full h-screen  flex justify-center'>
      <div className='w-[80%] items-between m-4'>
        <Navbar />
        <Hero />
      </div>

    </div>
    </>
  )
}

export default App