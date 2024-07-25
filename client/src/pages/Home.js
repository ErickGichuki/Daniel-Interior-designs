import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faCouch, faLightbulb, faExpandArrowsAlt, faComment, faPalette, faCheck, faUser, faStar, faUserLarge } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='relative bg-gray-200 p-10'
      style={{
        backgroundImage:'url(https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyaW5ncyUyMGludGVyaW9yJTIwZGVzaWduc3xlbnwwfHwwfHx8MA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className='text-center pt-10 max-w-2xl mx-auto mb-4 py-20'>
          <h1 className='text-4xl font-bold mb-4'>Transform Your Space with Daniel Interior Designs</h1>
          <p className='text-lg mb-6'>We believe in creating spaces that inspire and elevate your everyday life. We work closely with you to bring your vision to life, combining functionality with aesthetic appeal.</p>
            <div className='flex flex-col md:flex-row justify-center mt-12 space-y-4 md:space-y-0 md:space-x-4 mx-4'>
              <button
              className='bg-black text-white p-3 rounded-2xl hover:bg-indigo-400 hover:text-black'
              >
                <a href='/about'>
                <span>Who we are</span>
                <span className='text-yellow-400 mx-2 text-xl'>→</span>
                </a>
              </button>
              <button
              className='bg-blue-500 text-white p-3 rounded-2xl hover:bg-blue-600 hover:border-white'>
                <span>Watch video</span>
              </button>
            </div>
        </div>
      </div>
      <div className='bg-gray-200 pt-12 justify-center pb-8'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl mb-4 font-bold'>Solutions we Offer</h2>
          <p className='text-lg'>We transform your space with our expert services: </p>
      </div>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div className='p-6 bg-white hover-move-icon'>
            <FontAwesomeIcon icon={faPaintBrush} className='text-4xl text-blue-600 mb-2 icon'/>
            <h3 className='text-xl font-semibold mb-2'>Marble Painting</h3>
            <p className='text-md'>Transform your space with luxurious marble painting, enhancing its appeal with sophisticated finishes and adding a touch of elegance to any room.</p>
          </div>
          <div className='p-6 bg-white hover-move-icon'>
            <FontAwesomeIcon icon={faCouch} className='text-4xl text-green-600 mb-2 icon'/>
            <h2 className='text-xl font-semibold mb-2'>Custom furniture design</h2>
            <p className='text-md'>Create bespoke furniture tailored to your needs, combining perfect functionality with stylish design to complement your space and enhance its overall aesthetic.</p>
          </div>
          <div className='p-6 bg-white hover-move-icon'>
            <FontAwesomeIcon icon={faLightbulb} className='text-4xl text-yellow-500 mb-2 icon'/>
            <h2 className='text-xl font-semibold mb-2'>Lighting Solutions</h2>
            <p className='text-md'>Design the ideal lighting setup for your space, crafting the perfect ambiance with tailored solutions that enhance both functionality and mood.</p>
          </div>
          <div className='p-6 bg-white hover-move-icon'>
            <FontAwesomeIcon icon={faExpandArrowsAlt} className='text-4xl text-red-600 mb-2 icon'/>
            <h2 className='text-xl font-semibold mb-2'>Space Optimization</h2>
            <p className='text-md'>Maximize your space's efficiency and visual appeal with expert optimization strategies, ensuring every inch is utilised effectively while maintaining a stylish and functional layout.</p>
          </div>
          <div className='p-6 bg-white hover-move-icon'>
            <FontAwesomeIcon icon={faComment} className='text-4xl text-purple-600 mb-2 icon'/>
            <h2 className='text-xl font-semibold mb-2'>Design Consultation</h2>
            <p className='text-md'>Receive personalized design advice to achieve your dream interior, with professional insights that help you create a space that reflects your style and meets your needs.</p>
          </div>
          <div className='p-6 bg-white hover-move-icon'>
            <FontAwesomeIcon icon={faPalette} className='text-4xl text-teal-600 mb-2 icon'/>
            <h2 className='text-xl font-semibold mb-2'>Color Palette Consulting</h2>
            <p className='text-md'>Get expert guidance on selecting the perfect color scheme for your space, enhancing its atmosphere and visual appeal with carefully chosen hues and combinations.</p>
          </div>
        </div>
      </div>
      <div className='py-12 px-8 md:px-16'>
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2 mb-6 md:mb-0'>
              <h2 className='text-3xl font-bold mb-4 text-gray-800'>Why Us?</h2>
              <ul className='space-y-3'>
                <li className='flex items-center text-lg'>
                    <FontAwesomeIcon icon={faCheck} className='text-green-500 mr-2'/>
                      Expertise
                </li>
                <li className='flex items-center text-lg'>
                  <FontAwesomeIcon icon={faCheck} className='text-green-500 mr-2'/>
                    Top-Notch designs solutions
                </li>
                <li className='flex items-center text-lg'>
                  <FontAwesomeIcon icon={faCheck} className='text-green-500 mr-2'/>
                    Reliability
                </li>
                <li className='flex items-center text-lg'>
                  <FontAwesomeIcon icon={faCheck} className='text-green-500 mr-2'/>
                    Innovation
                </li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <img
              src='./background.png'
              alt='why us'
              className='w-64 h-64 rounded-full'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='py-12 bg-gray-100 px-4 md:px-8'>
        <div className='text-center mx-4 md:mx-0 py-8'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Testimonials</h2>
          <p className='text-lg text-gray-600 mb-8'>Reviews from our customers concerning the transformative impact of our interior design solutions.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-8 mt-8'>
          <div className='shadow-2xl bg-white py-6 px-6 rounded-lg flex-1'>
            <div className='flex items-center space-x-3 pb-4 border-b border-gray-200'>
              <FontAwesomeIcon icon={faUser} className='text-3xl text-blue-600 border rounded-full p-2'/>
              <h2 className='text-xl text-gray-800 font-bold'>Kennedy A.</h2>
            </div>
            <p className='text-md mt-4 text-gray-700'>"Working with Daniel Interior was a fantastic experience. They listened to our needs and delivered a beuatiful, functional space that we love spending time in."</p>
            <div className='flex mt-4'>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
            </div>
          </div>
          <div className='shadow-2xl bg-white py-6 px-6 rounded-lg flex-1'>
            <div className='flex items-center space-x-3 pb-4 border-b border-gray-200'>
              <FontAwesomeIcon icon={faUserLarge} className='text-3xl text-blue-600 border rounded-full p-2'/>
              <h2 className='text-xl text-gray-800 font-bold'>Lucky A.</h2>
            </div>
            <p className='text-md mt-4 text-gray-700'>"From concept to completion, the team was exceptional. Their innovative ideas and flawless execution transformed our office into a stunning workspace."</p>
            <div className='flex mt-4'>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
            </div>
          </div>
          <div className='shadow-2xl bg-white py-6 px-6 rounded-lg flex-1'>
            <div className='flex items-center space-x-3 pb-4 border-b border-gray-200'>
              <FontAwesomeIcon icon={faUser} className='text-3xl text-blue-600 border rounded-full p-2'/>
              <h2 className='text-xl text-gray-800 font-bold'>Hezron.O <span className='text-lg font-semibold'></span></h2>
            </div>
            <p className='text-md mt-4 text-gray-700'>"Daniel Interior Designs completely revitalized our home. Their attention to detail and creative solutions exceeded our expectations. We couldn't be happier with our results!"</p>
            <div className='flex mt-4'>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
            </div>
          </div> 
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
