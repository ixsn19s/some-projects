import React, { useState } from 'react'
import Cbuttons from './Cbuttons'

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmitBtn = (event) => {
    event.preventDefault();

  setName( event.target.name.value);
  setEmail( event.target.email.value);
  setText( event.target.text.value);
}



  return (
    <div className='w-full  flex justify-between'>
      <div className='w-1/2'>
        <Cbuttons />
        <form  className='flex flex-col' onSubmit={onSubmitBtn}>
          <div className='form flex flex-col w-[63%] rounded-md relative mb-6'>
            <label className='absolute -top-3 left-3 bg-white font-semibold' htmlFor="name">Name</label>
            <input name="name" className='border border-black h-8 py-5 rounded-lg' type="text" />
          </div>

          <div className='form flex flex-col w-[63%] rounded-md relative mb-6'>
            <label className='absolute -top-3 left-3 bg-white font-semibold' htmlFor="email">E-Mail</label>
            <input name="email" className='border border-black h-8 py-5 rounded-lg' type="email" />
          </div>

          <div className='form flex flex-col w-[63%] rounded-md relative mb-6'>
            <label className='absolute -top-3 left-3 bg-white font-semibold' htmlFor="text">TEXT</label>
            <input name="text" className='border border-zinc-700 h-8 py-10 rounded-lg' type='text' />
          </div>

          <button type='submit'
          
           className='flex w-1/3 justify-center bg-zinc-700 text-white rounded-md px-6 py-1'>
            Submit
            
          </button>
          <div className='mt-2'>
            <pre>{`Name: ${name}\nEmail: ${email}\nText: ${text}`}</pre>
          </div>

        </form>
      </div>

      <div className='w-1/2 flex justify-center items-center'>
        <img src="/images/Service24.png" alt="Service 24" className='w-full h-[90%]' />
      </div>
    </div>
  )
}

export default ContactForm
