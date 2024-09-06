import React from 'react'

const Button = ({userInput}) => {
  return (
    <div>
        <div className='header'>
            <h2 className='text-2xl font-medium text-center mt-2 mb-5'>What's up lords and ladies</h2>
        </div>
        <div className='button-category flex justify-center gap-10 mt-3'>

        <button onClick={userInput} value="sports" className='text-lg text-white font-medium bg-orange-400 rounded-3xl px-6 py-2'>Sports</button>

        <button onClick={userInput} value="politics" className='text-lg text-white font-medium bg-orange-400 rounded-3xl px-6  py-2'>Politics</button>

        <button onClick={userInput} value="entertainment" className='text-lg text-white font-medium bg-orange-400 rounded-3xl px-2 py-2'>Entertainment</button>

        <button onClick={userInput} value="health" className='text-lg text-white font-medium bg-orange-400 rounded-3xl px-6  py-2'>Health</button>

        <button onClick={userInput} value="fitness" className='text-lg text-white font-medium bg-orange-400 rounded-3xl px-6 py-2'>Fitness</button>

      </div>
    </div>
  )
}

export default Button