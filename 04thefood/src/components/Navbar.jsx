// time : 13min


import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { LINKS } from '../constants';
// import LINKS from './index.jsx'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if(!isOpen){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen])
  

  return (
    <>
    <nav className='fixed top-0 right-0 z-30 p-2'>
      <button onClick={toggleMenu} className='rounded-md p-2'>
        {isOpen ? (
          <FaTimes className='h-6 w-6'/>
        ) : (
          <FaBars className='h-6 w-6'/>
        )}
      </button>
      
    </nav>

    { isOpen && (
      <div className='fixed inset-0 z-20 flex flex-col items-center justify-center bg-zinc-600 text-white'>
        <ul className='space-y-6 text-3xl'>
          {LINKS.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}
              onClick={toggleMenu} 
              className='text-white text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-8xl'>
              {link.name}
              </a>

            </li>
          ))}
        
        </ul>
      </div>
    )

    }
    </>
  )
}

export default Navbar