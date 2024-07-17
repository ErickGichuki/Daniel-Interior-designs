import React from 'react'
import Navbar from '../components/Navbar'


function Home() {
  return (
    <div>
      <Navbar/>
      <div className=''>
        <h2 className='text-2xl text-black'>Discover the best Interior designs around you</h2>
        <p>The most secure designs</p>
      </div>
      <div>
        <button className=''>Let's connect</button>
      </div>
    </div>
  )
}

export default Home
