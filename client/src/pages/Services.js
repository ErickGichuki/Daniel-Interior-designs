import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Services() {
  return (
    <div>
      <Navbar/>
      <div className='p-3'>
        <h2>We offer the following services</h2>
        <div className='shadow-lg'>
          <h2>marble painting</h2>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Services
