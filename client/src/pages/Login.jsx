import {useNavigate} from 'react-router-dom'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import {  toast } from 'react-toastify';
import logo from '../assets/logo4.webp'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/pages/Login.css'
import { useDispatch } from 'react-redux'
import { setLogin } from '../state'

const Login = () => {
  document.title = "Login - Zavtra Bank";


  const navigate = useNavigate();
  const dispatch = useDispatch()

  const initialValues = {
    email: '',
    password: ''
  }

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Please enter your email'),
    password: Yup.string().min(7, "minimum character should be 7").max(20).required('Password is required')
  })

  const onSubmit = async (values) => {

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(values),
      });

      const data = await response.json()

      if(data.user.id) {
        dispatch(setLogin({user: data.user.id, isAdmin: Boolean(data.user.admin), token: data.token}))
        navigate('/')
        toast.success(data.message)
      } else {
        toast.error(data.error)
      }
    } catch (error) {
      console.log("Impossible de connecter l'utilisateur ", error)
    }
  }

  return (
    <div className='login'>
      <div className="loginContainer">
        <div className="leftSide">
          <span className="leftSideBankSlogan">BANK OF TODAY<br/> AND TOMORROW</span>
        </div>

        <div className="rightSide">
          <Formik
            initialValues={initialValues}

            validationSchema={loginSchema}

            onSubmit={onSubmit}
          >
            {() => (
              <Form className='loginForm'>
                <legend className='rightSideFormText'>
                  <h1 className="rightSideTitle">Welcome Back!</h1>
                  <div className="rightSideBankLogo">
                    <img src={logo} aria-label="Bank logo" className='rightSideLogoImg'/>
                    <span className="rightSideLogoTitle">Zavtra Bank</span>
                  </div>
                </legend>

                <div className="rightSideField">
                  <span className="rightSideIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="20" height="20" viewBox="0 0 512 512"><path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"/></svg>
                  </span>
                  <Field 
                    type='text'
                    name='email' 
                    placeholder='Email'
                    className='rightSideFieldControl'
                  />
                  <ErrorMessage 
                    component='label'
                    className='form_label text-danger'
                    name='email' />
                </div>

                <div className="rightSideField fieldSpace">
                  <span className="rightSideIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="20" height="20" viewBox="0 0 512 512"><path d="M368 192h-16v-80a96 96 0 10-192 0v80h-16a64.07 64.07 0 00-64 64v176a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V256a64.07 64.07 0 00-64-64zm-48 0H192v-80a64 64 0 11128 0z"/></svg>
                  </span>
                  <Field 
                    type='password' 
                    placeholder='Password' 
                    name='password' 
                    className='rightSideFieldControl'
                  />
                  <ErrorMessage 
                    component='label' 
                    className='form_label text-danger' 
                    name='password' />
                </div>

                <div className="rightSideForgotPassword">
                  <Link className='rightSideForgotPasswordLink'>
                    Forgot Password?
                  </Link>
                </div>

                <div className="rightSideField">
                  
                  <button className="rightSideBtn rightSideFieldControl" type='submit'>
                    Login
                  </button>
                </div>
                
                <div className="rightSideText">Or login with</div>

                <div className="rightSideSignUp">
                  Don't have account?
                  <Link to='/register' className='rightSideRegisterNow'>Register Now</Link>
                </div>
              </Form>
            )}
            
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login