import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMailBulk} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className='bg-dark-blue'>
    <div className='grid grid-cols-1 md:grid-cols-5 p-4'>
      <div className='text-white'>
        <h2 className='text-xl flex flex-row'>Daniel Interior Designs</h2>
        <p>Tranforming your design today</p>
      </div>
      <div className='text-white'>
        <h2 className='font-bold text-lg'>Useful Links</h2>
         <ul className='list-none'>
            <li><a href='/home'>Home</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact Us</a></li>
         </ul>
      </div>
     
      <div className='text-white'>
        <h2 className='text-lg font-bold'>Solutions</h2>
        <ul className='list-none'>
            <li><a href='#'>Interior lighting</a></li>
            <li><a href='#'>Space optimization</a></li>
            <li><a href='#'>Paninting & Flooring</a></li>
            <li><a href='#'>Project Execution</a></li>
        </ul>
      </div>
      <div className='text-white'>
        <h>Reach us via</h>
        <div className='flex flex-col md:flex-row py-2 pt-3 justify-between'>
        <input
            type='text'
            placeholder='email us'
            className='py-3 rounded-lg text-center '
            />
             <button
            type='submit'
            className='text-white py-2 px-3 bg-yellow-600 rounded '
            >
                SUBMIT
            </button>
        </div>
        <div className='flex flex-row space-x-7'>
        <FontAwesomeIcon icon={faPhone} className='rounded-3xl bg-green-600 py-2 px-2'/>
        <FontAwesomeIcon icon={faMailBulk} className='rounded-3xl bg-blue-600 py-2 px-2'/>
        <FontAwesomeIcon icon={faMailBulk} className='rounded-3xl bg-gray-600 py-2 px-2'/>
        <FontAwesomeIcon icon={faPhone} className='rounded-3xl bg-violet-600 py-2 px-2'/>
        </div>
    </div>
    </div>
     <div className='border-t border-gray-600 text-white text-center py-6'>
      <p>&copy; {new Date().getFullYear()} Daniel Interior Designs</p>
     </div>
    </div>
  )
}

export default Footer
