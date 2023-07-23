import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import {  toast } from 'react-toastify';
import logo from '../assets/logo4.webp'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/pages/Register.css'
import { useState } from 'react';


const Register = () => {
  document.title = 'Registration - Zavtra Bank';

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setConfirmShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleToggleConfirmPassword = () => {
    setConfirmShowPassword(!showConfirmPassword)
  }

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    policyTerms: false
  }

  const RegisterSchema = Yup.object().shape({
    username: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too long')
    .required('username is required'),
    email: Yup.string().email('Invalid email').required('email required'),
    password: Yup.string()
    .min(6, 'Not Strong Password!')
    .max(20, 'Strong Password!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    )
    .required('password required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match")
    .required('Please confirm your password'),
    policyTerms: Yup.boolean().oneOf([true], 'Please accept the terms of service!')
  })

  const onSubmit = async (values) => {

    try {
      const responseRegister = await fetch('/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(values),
      })

      const dataRegister = await responseRegister.json()
      if(dataRegister.message === "Registration successful!") {
        navigate("/login");
        toast.success(dataRegister.message)
      } else {
        toast.error("Registration fails, please fill in all fields!!")
      }
    } catch (error) {
      console.log("Registration impossible ", error);
    }
  }



  return (
    <div className='register'>
      <div className="registerWrapper">
        <div className="registerLeft">
          <Formik 
              initialValues={initialValues}
              validationSchema={RegisterSchema}
              onSubmit={onSubmit}
          >
            {() => 
            (
              <Form className='registerForm'>
                <legend className='registerLeftText'>
                  <h1 className="registerLeftTitle">
                    Create Account
                  </h1>
                  <div className="registerLeftBankLogo">
                    <img src={logo} aria-label="Bank logo" className='registerLeftLogo'/> 
                    <span className="registerLeftLogoTitle">Zavtra Bank</span>
                  </div>
                </legend>

                <div className="registerLeftFormField">
                  <legend className='registerLeftFormTitle'>Username</legend>
                  <Field 
                    type='text' 
                    name='username' 
                    placeholder='user Name' 
                    className='registerLeftControl'
                  />
                  <ErrorMessage 
                    component='label' 
                    className='formLabel text-danger' 
                    name='username' 
                  />
                </div>
              

                <div className="registerLeftFormField">
                  <legend className='registerLeftFormTitle'>Email</legend>
                  <Field 
                    type='text' 
                    name='email' 
                    placeholder='Email' 
                    className='registerLeftControl'
                  />
                  <ErrorMessage 
                    component='label' 
                    className='formLabel text-danger' 
                    name='email' 
                  />
                </div>

                <div className="registerLeftFormField">
                  <legend className='registerLeftFormTitle'>Password</legend>
                  <Field 
                    type={showPassword ? 'text' : 'password'} 
                    name='password' 
                    placeholder='Password' 
                    className='registerLeftControl'
                  />
                  <ErrorMessage 
                    component='label' 
                    className='formLabel text-danger' 
                    name='password' 
                  />
                  <div 
                    className="showPasswordIcon"
                    onClick={handleTogglePassword}
                  >
                    {
                      showPassword ? 
                      <span className='showIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z"/><path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z"/></svg>
                      </span> 
                      :
                      <span className='showIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                      </span>
                    }
                  </div>
                </div>

                <div className="registerLeftFormField">
                  <legend className='registerLeftFormTitle'>Confirm Password</legend>
                  <Field 
                    type={showConfirmPassword ? 'text' : 'password'}  
                    name='confirmPassword' 
                    placeholder='Confirm Password' 
                    className='registerLeftControl'
                  />
                  <ErrorMessage 
                    component='label' 
                    className='formLabel text-danger' 
                    name='confirmPassword' 
                  />
                  <div 
                    className="showPasswordIcon"
                    onClick={handleToggleConfirmPassword}
                  >
                    {
                      showConfirmPassword ? 
                      <span className='showIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z"/><path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z"/></svg>
                      </span> 
                      :
                      <span className='showIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                      </span>
                    }
                  </div>
                </div>

                <div className="registerLeftPrivacyTerms">
                  <label aria-label='checkbox' className='registerLeftTermsText'>
                    I accept the Terms of Use & Privacy Policy
                    <Field 
                      type='checkbox' 
                      name='policyTerms' 
                      className='checkboxForm'
                    />
                  </label>
                  <ErrorMessage 
                    component='label' 
                    className='formLabel text-danger' 
                    name='policyTerms' 
                  />
                </div>

                <div className="registerLeftFormField">
                  <button className="Btn registerLeftControl" type='submit'>
                    REGISTER
                  </button>
                </div>

                <div className="registerAlreadyAccount">
                  Have already an account?
                  <Link to='/login' className='loginHere'>Login</Link>
                </div>
            </Form>
            )}
          </Formik>
        </div>

        <div className="registerRight">
          <span className="registerRightBankSlogan">BANK OF TODAY<br/> AND TOMORROW</span>
        </div>
      </div>
    </div>
  )
}

export default Register