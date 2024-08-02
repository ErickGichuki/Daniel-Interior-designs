import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            newPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required'),
            newPassword: Yup.string().required('New password is required')
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post('/reset_password', {
                    email: values.email,
                    new_password: values.newPassword
                });
                if (response.status === 200) {
                    setMessage('Password has been reset successfully.');
                    navigate('/login');
                }
            } catch (error) {
                setMessage(error.response?.data?.message || 'Error resetting password.');
            }
        }
    });

    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-600 via-yellow-600 to-red-600'>
            <div className='w-1/3 p-8 border bg-white rounded-lg'>
                <h3 className='text-2xl font-bold mb-4'>Reset Password</h3>
                {message && (
                    <p className={
                        message.includes('successfully')
                        ? 'text-green-500 text-center mb-4'
                        : 'text-red-500 text-center mb-4'
                    }>
                        {message}
                    </p>
                )}
                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-4'>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className='text-red-500'>{formik.errors.email}</p>
                        )}
                    </div>
                    <div className='mb-4 relative'>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            type={showPassword ? 'text' : 'password'}
                            name='newPassword'
                            placeholder='Enter new password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.newPassword}
                        />
                        <button
                            type='button'
                            className='absolute inset-y-0 right-0 pr-3 flex items-center leading-5'
                            onClick={toggleShowPassword}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {formik.touched.newPassword && formik.errors.newPassword && (
                            <p className='text-red-500'>{formik.errors.newPassword}</p>
                        )}
                    </div>
                    <div className='flex items-center justify-center'>
                        <button
                            type='submit'
                            className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-7 rounded-xl focus:outline-none focus:shadow-outline'
                        >
                            Reset Password
                        </button>
                    </div>
                    <div className='flex items-center justify-center mt-4'>
                        <p className='mr-2'>Remembered the password?</p>
                        <Link 
                        to='/login' className='text-blue-600 hover:text-blue-700 cursor-pointer'
                        >
                            Login
                            
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
