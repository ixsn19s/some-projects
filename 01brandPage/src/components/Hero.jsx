import React from 'react'

const Hero = () => {
  return (
    <>
    <div className=''>

    <div className='hero flex items-center'>
      <div className='hero-content w-[70%]'>

        <h1 className='text-8xl font-bold'>YOUR FEET DESERVES THE BEST</h1>

        <p className='font-semibold text-gray-600 w-[70%] mt-4'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      </div>

      <div className='hero-image flex flex-wrap items-center'>
        <img className='flex items-center' src="/images/shoe_image.png" alt="shoe_image" />
      </div>
    </div>

      <div className='hero-button flex gap-4 mb-5'>
        <button className='bg-red-600 px-4 py-1 rounded-md text-white font-semibold'>Shop Now</button>
        <button className=' px-4 py-1 rounded-md text-black border-solid border-2 border-black font-semibold'>Category</button>
      </div>

      <div className='market-place'>
        <p className='text-md mb-1 font-semibold'>Also Available On</p>
        <div className='flex gap-6'>
          <img src="/images/amazon.png" alt="" />
          <img src="/images/flipkart.png" alt="" />
        </div>

      </div>


    </div>
    
    </>
  )
}

export default Hero