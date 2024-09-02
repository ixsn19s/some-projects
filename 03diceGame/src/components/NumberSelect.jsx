import React from 'react'
import { useState } from 'react';

const NumberSelect = ({selectedNum, setSelectedNum, error, setError}) => {

    const arrNum = [1,2,3,4,5,6];

    const numSelectHandler = (value) => {
      setSelectedNum(value);
      setError("");
    }

  return (

    <div className='mt-14'>
     
        <p className='text-red-800 text-xl text-center mb-1'>{error}</p>
        <div className='flex gap-4 mr-10'>
        {
            arrNum.map((value,index) => {
                return <h3
                key={index}
                onClick={() =>numSelectHandler(value)}
                // isSelected = {value === selectedNum}
                className={`w-12 text-xl font-semibold h-12 cursor-pointer border border-gray-950 focus:ring-2 flex justify-center items-center
                 ${value === selectedNum ? "bg-zinc-800" : "bg-zinc-200"} 
                 ${value === selectedNum ? "text-white" : "text-black"}`
                }> 
                {value}
              </h3>
            })
        }
    
        </div>
        <p className='text-xl font-semibold text-center pt-3'>Select Number</p>
    </div>
  )
}

export default NumberSelect