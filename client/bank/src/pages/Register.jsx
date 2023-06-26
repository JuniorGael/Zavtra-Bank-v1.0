import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import '../styles/pages/Register.css'
import { Link } from 'react-router-dom'

const Register = () => {

  document.title = 'Registration - Zavtra Bank';

  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    username: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too long')
    .required('username is required'),
    email: Yup.string().email('Invalid email').required('email required'),
    password: Yup.string()
    .min(7, 'Not Strong Password!')
    .max(20, 'Strong Password!')
    .required('password required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Password don't match")
    .required(),
    policyTerms: Yup.boolean().oneOf([true], 'Please accept the terms of service!')
  })

  const onSubmit = async (values, actions) => {
    actions.resetForm()

    const validateFormData = await RegisterSchema.validate(values, {abortEarly: false})

    fetch('http://localhost:5174/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validateFormData),
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.message === "Your registered!") {
        navigate("/login");
      } else {
        alert("error")
      }
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  return (
    <div className='register'>
      <div className="registerWrapper">
        <div className="registerLeft">
          <Formik 
              initialValues={{
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                policyTerms: false
              }}
              
              
              validationSchema={RegisterSchema}

              onSubmit={onSubmit}
            
          >
            {() => 
            (
              <Form className='registerForm'>
                <legend className='registerLeftText'>
                  <span className="registerLeftProfileLogo">
                    <CgProfile />
                  </span>
                  <h1 className="registerLeftTitle">
                    Create Account
                  </h1>
                  <div className="registerLeftBankLogo">
                    <img src="https://zavtrabank.com/wp-content/uploads/2022/06/logo_min.png" aria-label="Bank logo" className='registerLeftLogo'/>
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
                    type='password' 
                    name='password' 
                    placeholder='Password' 
                    className='registerLeftControl'
                  />
                  <ErrorMessage 
                    component='label' 
                    className='formLabel text-danger' 
                    name='password' 
                  />
                </div>

                <div className="registerLeftFormField">
                  <legend className='registerLeftFormTitle'>Confirm Password</legend>
                  <Field 
                    type='password' 
                    name='confirmPassword' 
                    placeholder='Confirm Password' 
                    className='registerLeftControl'
                  />
                  <ErrorMessage 
                    component='label' 
                    className='formLabel text-danger' 
                    name='confirmPassword' 
                  />
                </div>

                <div className="registerLeftPrivacyTerms">
                  <legend className='registerLeftTermsText'>
                    I accept the Terms of Use & Privacy Policy
                    <Field 
                      type='checkbox' 
                      name='policyTerms' 
                      className='checkboxForm'
                    />
                  </legend>
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
          {/* <div className="registerRightText"> */}
            <span className="registerRightBankSlogan">BANK OF TODAY<br/> AND TOMORROW</span>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Register