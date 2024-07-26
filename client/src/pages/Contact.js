import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'

function Contact() {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    email: '',
    phone: '',
    project: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/contact', formData);
      if ( response.status === 201){
        setResponseMessage('Your message has been sent and will be looked at quickly.');
        setTimeout(() => {
          setResponseMessage(null);
        }, 10000)
      } else{
        setResponseMessage('Something went wrong. Please try again.')
      }
      setFormData({
        message:'',
        name: '',
        email: '',
        phone: '',
        project: '',
      });
    } catch (error) {
      setResponseMessage('It is required you fill the spaces.');
      setTimeout(() =>{
        setResponseMessage(null)
      }, 1500)
    }
  };

  return (
    <div className='bg-gray-400'>
      <Navbar/>
      <div className='bg-gray-100 flex flex-col p-12 md:flex-row justify-between items-center'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <h2 className='text-xl font-bold mb-4 text-gray-800'>Ready to transform your interiors? Contact us today to schedule consultation nd let us illuminate your space with our expert design services.</h2>
          <p className='text-xl font-semibold mb-6 text-gray-700'>Don't hesitate book with us today</p>
        </div>

      <form onSubmit={handleSubmit} className='p-6 bg-white rounded-lg shadow-md md:w-1/2'>
        <div className='mb-4'>
          <textarea
          className='w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none focus:shadow-outline'
          rows='4'
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Message'
          ></textarea>
        </div>
        <div className='mb-4'>
          <input 
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name'
          className='w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <input 
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
          className='w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <input 
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          placeholder='Enter your phone'
          className='w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <input 
          name='project'
          value={formData.project}
          onChange={handleChange}
          placeholder='Enter your project'
          className='w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='flex items-center justify-center'>
          <button
          type='submit'
          className='bg-white text-teal-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-200'>
            SUBMIT
          </button>
        </div>
        {
          responseMessage && (
            <div className='mt-4 text-center'>
              {responseMessage}
            </div>
          )
        }
      </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
