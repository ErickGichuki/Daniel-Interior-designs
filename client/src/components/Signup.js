import React, { useState } from 'react'
import * as Yup from 'yup';
import {useFormik} from 'formik';
import axios from 'axios';
import sha1 from 'sha1';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

async function isPasswordPwned(password){
    const hash = sha1(password);
    const prefix = hash.substring(0,5);
    const suffix = hash.substring(5).toUpperCase();
  
    const response = await axios.get(`https://api.pwnedpasswords.com/range/${prefix}`);
    const pwnedList = response.data.split('\n').map(line => line.split(':')[0]);
    return pwnedList.includes(suffix);
  
  }

function Signup() {
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    const nav = useNavigate()

    const formik = useFormik({
        initialValues: {
          "username":'',
          "email":'',
          "password":'',
          "passwordConfirmation":''
        },
        validationSchema: Yup.object({
          username: Yup.string().max(25, "Must be 25 characters or less").required("username is required"),
          email: Yup.string().email('Not a valid email').required('email is required'),
          password: Yup.string()
          .min(8, 'Password must be at least 8 characters long')
          .matches(/[a-z]/, 'Password must contain atleast one lowercase letter')
          .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
          .matches(/[0-9]/, 'Password must have at least one number')
          .matches(/[@$!%*?&]/, 'Password must contain atleast one special character')
          .required('Password is required'),
          passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Password confirmation is required')
        }),
        onSubmit: async(values) => {
            try {
                const pwned= await isPasswordPwned(values.password);
                if (pwned) {
                    setError('This password has been pwned. Please choose another one.');
                    return;
                }
                const response= await axios.post('/signup', values);
                if (response.status === 201) {
                    setMessage('User created successfully')
                    formik.resetForm();
                    setTimeout(() => {
                        setMessage(null);
                    }, 2900);
                }
                nav('/login')
            } catch (error) {
                setError('An error occured during signup.Please try again')
            }
        } 
        
      });
      
  return (
    <div className='min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-green-600 via-yellow-600 to-red-600'>
        <div className='md:w-1/2 lg: bg-black p-4 m-10 rounded-3xl'>
            <h2 className='text-white text-4xl font-bold mb-4'>Transform your space with us</h2>
            <p className='text-white mb-6'>Wondering where to find a company that designs your dream interior solutions?</p>
            <p className='text-white mb-4'>Worry no more we are here to deliver the best solution</p>
            <div className='flex justify-center'>
              <img src='/tony.png' alt='tony' className='w-40 border rounded-2xl pulse'/>
            </div>
        </div>
        <div className='md:w-1/3 p-14 border bg-white mr-4 rounded-lg mb-4 mx-5'>
            <h3 className='text-2xl font-bold mb-4'>Welcome to Daniel Interior Designs</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className='mb-4'>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                type='text' 
                name = 'username'
                placeholder='Enter your username'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username && <p className='text-red-500'>{formik.errors.username}</p>}
                </div>
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
              <div className='mb-4'>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                type='password' 
                name = 'passwordConfirmation'
                placeholder='Confirm your password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passwordConfirmation}
                />
                {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && <p className='text-red-500'>{formik.errors.passwordConfirmation}</p>}
              </div>
              {message && <p className='text-green-500'>{message}</p>}
              {error && <p className='text-red-500'>{error}</p>}
              <div className='flex items-center justify-center'>
                <button type='submit' className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline'>
                    Sign Up
                </button>
              </div>
              <p className='text-center text-gray-500 text-sm mt-4'>
                Already have an account? <Link to='/login' className='text-green-600 hover:text-green-700'>Login</Link> here
              </p>
            </form>
      </div>
    </div>
    
  )
}

export default Signup
