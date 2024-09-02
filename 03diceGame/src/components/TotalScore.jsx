import React from 'react'

const TotalScore = ({score}) => {
  return (

    <div className=' max-h-48 pt-6 text-center'>
        
        <h1 className='text-9xl font-bold'>{score}</h1>
        <p className=' text-xl font-semibold' >Total Score</p>
    </div>
  )
}

export default TotalScore