import React from 'react'
import * as Yup from 'yup';
import useFormik from 'formik';
import axios from 'axios';
import sha1 from 'sha1';

async function isPasswordPwned(password){
    const hash = sha1(password);
    const prefix = hash.substring(0,5);
    const suffix = hash.substring(5).toUpperCase();
  
    const response = axios.get(`https://api.pwnedpasswords.com/range/${prefix}`);
    const pwnedList = response.data.split('\n').map(line => line.split(':')[0]);
    return pwnedList.includes(suffix);
  
  }

function Signup() {
    const formik = useFormik({
        initialValues: {
          "username":'',
          "email":'',
          "password":'',
          "passwordConfirmation":''
        },
        validationSchema: Yup.object({
          username: Yup.string().max(25, "Must be 25 characters or less").required("Name is required"),
          email: Yup.string().email('Not a valid email').required('email is required'),
          password: Yup.string()
          .min(8, 'Password must be at least 8 characters long')
          .matches(/[a-z]/, 'Password must contain atleast one lowercase letter')
          .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
          .matches(/[0-9]/, 'Passowrd must have at least one number')
          .matches(/[@$!%*?&]/, 'Password must contain atleast one special character')
          .required('Password is required'),
          passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Password confirmation is required')
        }),
        onSubmit: async(values) => {
          const response = axios.post('signup', values);
          if (response.status === 201) {
            setMessage('User created successfully');
            formik.resetForm();
            setTimeout(() => {
              setMessage(null);
            }, 2900)
          }
        }
      })
  return (
    <div>
      
    </div>
  )
}

export default Signup
