import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { IoMdSearch } from 'react-icons/io'
import { IoIosAddCircle } from "react-icons/io";
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from './config/firebase';

const App = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts")
        const contactSnapshot = await getDocs(contactRef)
        const contactLists = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        }
        )
        console.log(contactLists);
        
      } catch (error) {
        console.error(error);
        
      }
    }
    getContacts();
  }, [])

  return (
    <>
      <div className='max-w-[460px] mx-auto px-4 m-5'>
        <Navbar />


        <div className='flex mt-5'>
          <div className='relative flex flex-grow items-center p-1'>
            <IoMdSearch className='absolute text-2xl text-white' />
            <input
             className='h-10 pl-8 mx-auto bg-transparent rounded-lg outline-none flex-grow border border-white  ' 
             type="text" 
             placeholder='Search Contact'
            />
          </div>
          <IoIosAddCircle className='text-white text-5xl cursor-pointer' />
        </div>
      </div>

    </>
  )
}

export default App