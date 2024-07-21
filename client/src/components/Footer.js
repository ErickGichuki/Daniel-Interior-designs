import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='bg-dark-blue'>
     <div className='container mx-auto px-4 py-8'>
     <div className='grid grid-cols-1 md:grid-cols-3 p-4 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      <div className='text-white'>
        <h2 className='text-xl font-semibold mb-2'>Daniel Interior Designs</h2>
        <p>Transforming your design today</p>
      </div>
      <div className='text-white'>
        <h2 className='font-bold text-lg'>Useful Links</h2>
         <ul className='list-none space-y-2'>
            <li><a href='/home' className='hover:'>Home</a></li>
            <li><a href='/services' className='hover:'>Services</a></li>
            <li><a href='/about' className='hover:'>About</a></li>
            <li><a href='/contact' className='hover:'>Contact Us</a></li>
         </ul>
      </div>
     
      <div className='text-white'>
        <h2 className='text-lg font-bold mb-2'>Solutions</h2>
        <ul className='list-none space-y-2'>
            <li><a href='#' className='hover:'>Interior lighting</a></li>
            <li><a href='#' className='hover:'>Space optimization</a></li>
            <li><a href='#' className='hover:'>Painting & Flooring</a></li>
            <li><a href='#' className='hover:'>Project Execution</a></li>
        </ul>
      </div>

      <div className='text-white'>
        <h2 className='text-lg font-bold mb-2'>Reach us via</h2>
        <div className='pt-3'>
         <form className=' flex flex-col md:flex-row items-center gap-4 mb-4'>
         <input
            type='text'
            name='email'
            placeholder='Email us'
            className='py-2 px-4 rounded-lg text-black mb-2 w-full max-w-xs'
            />
             <button
            type='submit'
            className='text-white py-2 px-4 bg-yellow-600 rounded-lg text-white'
            >
                SUBMIT
            </button>
         </form>
        </div>
        <div className='flex flex-wrap gap-4 justify-center'>
        <FontAwesomeIcon icon={faFacebookF} className='rounded-full bg-green-600 p-3'/>
        <FontAwesomeIcon icon={faTwitter} className='rounded-full bg-blue-400 p-3'/>
        <FontAwesomeIcon icon={faInstagram} className='rounded-full bg-pink-600 p-3'/>
        <FontAwesomeIcon icon={faWhatsapp} className='rounded-full bg-green-600 p-3'/>
        <FontAwesomeIcon icon={faLinkedin} className='rounded-full bg-blue-700 p-3'/>

        </div>
    </div>
    </div>
    
     <div className='border-t border-gray-600 text-white text-center py-6'>
      <p>&copy; {new Date().getFullYear()} Daniel Interior Designs</p>
     </div>
     </div>
    </div>
  )
}

export default Footer
