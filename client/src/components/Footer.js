import React from 'react'

function Footer() {
  return (
    <div className='bg-dark-blue flex flex-col gap-5 md:flex-row px-4 py-4'>
      <div className='text-white'>
        <h2 className='text-xl'>Daniel Interior</h2>
        <p>We are dedicated to make your life become great</p>
      </div>
      <div className='text-white list-none'>
        <h2 className='font-bold text-lg'>Useful Links</h2>
        <li><a href='/home'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/services'>Services</a></li>
        <li><a href='/contact'>Contact Us</a></li>
      </div>
      <div className='text-white list-none'>
        <h2 className='font-bold text-lg'>Platforms</h2>
        <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Whatsapp</li>
            <li>Instagram</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
