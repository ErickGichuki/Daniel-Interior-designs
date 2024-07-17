import React, { useState } from 'react'
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [message, setMessage] = useState(null)


    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email('Invalid email')
            .required('email is required'),
            password: Yup.string()
            .required('Password is required')
        }),
        onSubmit: async(values) => {
            try {
                const response = await axios.post('/login', values);
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.access_token);
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    setMessage('Logged in sucessfully')
                    navigate('/home');
                    formik.resetForm();
                }
            } catch (error) {
                setMessage('Login failed', error);
            }
        }
    });

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-green-600 via-yellow-600 to-red-600'>
        <div className='md:w-2/3 bg-black p-4 m-10 rounded-3xl'>
            <h2 className='text-white text-4xl font-bold mb-4'>Transform your space with us</h2>
            <p className='text-white mb-6'>Wondering where to find a company that designs your dream interior solutions?</p>
            <p className='text-white mb-4'>Worry no more we are here to deliver the best solution</p>
            <div className='flex justify-end'>
              <img src='/tony.png' alt='tony' className='w-40 border rounded-2xl pulse'/>
            </div>
        </div>
        <div className='md:w-1/3 p-14 border bg-white mr-4 rounded-lg'>
            <h3 className='text-2xl font-bold mb-4'>Welcome to Daniel Interior Designs</h3>
            {message && (
                <p 
                className={
                    message === 'logged in successfully!'
                    ? 'text-green-500 text-center mb-4'
                    : 'text-violet-700 text-center mb-4'
                }
                >{message}</p>
            )}
            <form onSubmit={formik.handleSubmit}>
              <div className='mb-4'>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                type='email' 
                name = 'email'
                placeholder='Enter your email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && <p className='text-red-500'>{formik.errors.email}</p>}
                </div>
              <div className='mb-4'>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                type='password' 
                name = 'password'
                placeholder='Enter your password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && <p className='text-red-500'>{formik.errors.password}</p>}
                </div>
              <div className='flex items-center justify-center'>
                <button type='submit' className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline'>
                    Log in
                </button>
              </div>
              <p className='text-center text-gray-500 text-sm mt-4'>Don't have an account? <Link to='/' className='text-green-600 hover:text-green-700'>Create one</Link> here</p>
            </form>
      </div>
    </div>
  )
}

export default Login
