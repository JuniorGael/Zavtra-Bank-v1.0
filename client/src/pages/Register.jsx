// import { useContext } from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom'
import {  toast } from 'react-toastify';
import logo from '../assets/logo4.png'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/pages/Register.css'


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
                    <img src={logo} aria-label="Bank logo" className='registerLeftLogo'/>label 
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