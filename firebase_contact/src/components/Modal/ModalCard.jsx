import React from 'react'
import Modals from './Modals'
import { Field, Form, Formik } from 'formik'
import { addDoc, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../config/firebase'


const ModalCard = ( {isOpen, onClose, isUpdate, contact }) => {

  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact)
    } catch (error) {
      console.log(error);
      
    }

  }



  return (
    <>
     <div className=' '>
          <Modals isOpen={isOpen} onClose={onClose} >
            <Formik 
              initialValues={ isUpdate ? {
                name: contact.name,
                email: contact.email,
              } : {
                name: "",
                email: "",
                
              }}

              onSubmit={(values) => {
                console.log(values);
                addContact(values)
                // addContact({name: values.name})
                // addContact({email: values.email})
              }}

            >
               <Form className=' mt-10'>
                    <div className='gap-2 flex flex-col'>
                      <label className='font-semibold' htmlFor="name">Name </label>
                      <Field name="name" className="border border-black outline-none px-8 rounded-md py-1" />
                    </div>

                    <div className='gap-2 flex flex-col mt-2'>
                      <label className='font-semibold' htmlFor="email">Email</label>
                      <Field name="email" className="border border-black outline-none rounded-md px-8 p-1 " />
                    </div>

                    
                    <button className='bg-orange-600 px-2 py-1 text-white font-medium text-lg rounded-md mt-3'>
                      {
                        isUpdate ? "update" : "Add" } Contact
                      </button>
               </Form>
               
            </Formik>
          </Modals>
        </div>
    </>
  )
}

export default ModalCard