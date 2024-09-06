import React from 'react'
import Navbar from './components/Navbar';
import Spline from '@splinetool/react-spline';
// import { LINKS } from './constants';

const App = () => {
  return (
   <main className='font-light text-white selection:bg-lime-300 selection:text-black antialiased bg-transparent bg-red-500'>
  <Navbar />
  {/* <Spline scene="https://prod.spline.design/Xa4t38gD4CbO7AWM/scene.splinecode" /> */}
  {/* <Spline scene="https://prod.spline.design/YMHxwZvftVGetszP/scene.splinecode" /> */}
  <Spline className='absolute top-0 left-0 w-[100%] h-[100%] scale-125' scene="https://prod.spline.design/YMHxwZvftVGetszP/scene.splinecode" />

   </main>
  )
}

export default App

