import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { IoMdSearch } from 'react-icons/io'
import { IoIosAddCircle } from "react-icons/io";
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from './config/firebase';
// import { HiOutlineUserCircle } from "react-icons/hi";
// import { MdDeleteForever } from "react-icons/md";
// import { TbEditCircle } from "react-icons/tb";
import ContactCard from './components/ContactCard';
// import Modals from './components/Modal/Modals';
import ModalCard from './components/Modal/ModalCard';
import useCustomHook from './hooks/useCustomHook';


const App = () => {

  const [contacts, setContacts] = useState([]);

  const {isOpen, onClose, onOpen} = useCustomHook()


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
        setContacts(contactLists);
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
          <IoIosAddCircle onClick={onOpen} className='text-white text-5xl cursor-pointer' />
        </div>

        <div className=' mt-3 flex flex-col gap-3'>
         {
          contacts.map((contact) => (
         <ContactCard key={contact.id} contact={contact}/>
          
          ))
         }
        </div>

       <ModalCard isOpen={isOpen} onClose={onClose} />


      </div>

      

    </>
  )
}

export default App