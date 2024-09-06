import React from 'react'
import Navbar from './components/Navbar'
import ContactHeader from './components/ContactHeader'
import ContactForm from './components/ContactForm'

const App = () => {
  return (
    <>
    <div className='w-full h-screen flex justify-center'>
      <div className='w-[80%]  items-between m-4'>
        <Navbar />
        <ContactHeader />
        <ContactForm />
      </div>

    </div>


    </>
    
  )
}

export default App