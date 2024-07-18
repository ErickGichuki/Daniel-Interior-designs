import React from 'react'

function Footer() {
  return (
    <div className='bg-dark-blue flex flex-col gap-4 md:flex-row'>
      <div className=''>
        <h2>Daniel Interior</h2>
      </div>
      <div>
        <h2 className='font-bold'>Useful Links</h2>
        <li><a href='/home'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/services'>Services</a></li>
        <li><a href='/contact'>Contact Us</a></li>
      </div>
    </div>
  )
}

export default Footer
