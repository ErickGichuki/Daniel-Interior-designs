import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faCouch, faLightbulb, faRuler, faComment, faPalette, faCheck, faUser, faStar, faUserLarge } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='relative bg-gray-200 p-10'
      style={{
        backgroundImage:'url(https://media.istockphoto.com/id/1471308768/photo/scandinavian-living-room-with-gray-armchair-on-empty-white-wall-background.webp?b=1&s=170667a&w=0&k=20&c=wnqCrLMZNdygyNHMVs85yWeOjD-YTDezA7vhQBQASZI=)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className='text-center pt-10 max-w-2xl mx-auto mb-4 py-20'>
          <h1 className='text-4xl font-bold mb-4'>Transform Your Space with Daniel Interior Designs</h1>
          <p className='text-lg mb-6'>We believe in creating spaces that inspire and elevate your everyday life. We work closely with you to bring your vision to life, combining functionality with aesthetic appeal.</p>
            <div className='flex flex-col md:flex-row justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4 mx-4'>
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
      <div className='bg-gray-100 pt-12 justify-center pb-8'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl mb-4 font-bold'>Our Services</h2>
          <p className='text-lg'>We transform your space with our expert services: luxurious marble painting, custom furniture design, tailored lighting solutions, efficient space optimization, and personalized enterior design consultations</p>
      </div>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div className='p-6 bg-white'>
            <FontAwesomeIcon icon={faPaintBrush} className='text-4xl text-blue-600 mb-2'/>
            <h3 className='text-xl font-semibold'>Marble Painting</h3>
            <p className='text-md'>luxurious finishes enhances your space's appeal.</p>
          </div>
          <div className='p-6 bg-white'>
            <FontAwesomeIcon icon={faCouch} className='text-4xl text-green-600 mb-2'/>
            <h2 className='text-xl font-semibold'>Custom furniture design</h2>
            <p className='text-md'>Tailored designs for perfect functionality and style.</p>
          </div>
          <div className='p-6 bg-white'>
            <FontAwesomeIcon icon={faLightbulb} className='text-4xl text-yellow-500 mb-2'/>
            <h2 className='text-xl font-semibold'>Lighting Solutions</h2>
            <p className='text-md'>Create the perfect ambiance with our lighting options.</p>
          </div>
          <div className='p-6 bg-white'>
            <FontAwesomeIcon icon={faRuler} className='text-4xl text-red-600 mb-2'/>
            <h2 className='text-xl font-semibold'>Space Optimization</h2>
            <p className='text-md'>Maximize functionality and aesthetics of your space.</p>
          </div>
          <div className='p-6 bg-white'>
            <FontAwesomeIcon icon={faComment} className='text-4xl text-purple-600 mb-2'/>
            <h2 className='text-xl font-semibold'>Design Consultation</h2>
            <p className='text-md'>Personalized advice to achieve your ideal interior.</p>
          </div>
          <div className='p-6 bg-white'>
            <FontAwesomeIcon icon={faPalette} className='text-4xl text-teal-600 mb-2'/>
            <h2 className='text-xl font-semibold'>Color Palette Consulting</h2>
            <p className='text-md'>Expert advice to choose the perfect color scheme for your space.</p>
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
              src='https://media.istockphoto.com/id/1500250958/photo/mockup-poster-frame-on-the-wall-of-living-room-luxurious-apartment-background-with.webp?b=1&s=170667a&w=0&k=20&c=ElwoK017ikvoMA8RYNA4lejhsPbDF4LC8qbj88xhM_A='
              alt='why us'
              className='w-full h-auto rounded-full'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='py-12 bg-gray-100 px-4 md:px-8'>
        <div className='text-center mx-4 md:mx-0 py-8'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Testimonials</h2>
          <p className='text-lg text-gray-600 mb-8'>Get to hear what our customers say about the transformative impact of our interior design solutions firsthand.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-8 mt-8'>
          <div className='shadow-2xl bg-white py-6 px-6 rounded-lg flex-1'>
            <div className='flex items-center space-x-3 pb-4 border-b border-gray-200'>
              <FontAwesomeIcon icon={faUser} className='text-3xl text-blue-600 border rounded-full p-2'/>
              <h2 className='text-xl text-gray-800 font-bold'>Sarah G.</h2>
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
              <h2 className='text-xl text-gray-800 font-bold'>Erick G.</h2>
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
              <h2 className='text-xl text-gray-800 font-bold'>Mucheru.S <span className='text-lg font-semibold'></span></h2>
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
