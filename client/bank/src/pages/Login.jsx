// import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {FaFacebook, FaGooglePlus, FaGithub, FaInstagram, FaUserAlt, FaLock} from 'react-icons/fa'
// import { AuthContext } from '../AuthContext'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import logo from '../assets/logo4.png'
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
      const response = await fetch("http://localhost:5174/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(values),
      });

      const data = await response.json()

      if(data.userId) {
        dispatch(setLogin({user: data.userId, token: data.token}))
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
                  <span className="rightSideIcon"><FaUserAlt /></span>
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
                  <span className="rightSideIcon"><FaLock /></span>
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

                <div className="rightSideSocialIcons">
                  <FaFacebook className='socialIcon'/>
                  <FaGooglePlus className='socialIcon'/>
                  <FaGithub className='socialIcon'/>
                  <FaInstagram className='socialIcon'/>
                </div>

                <div className="rightSideSignUp">
                  Don't have account?
                  <Link to='/register' className='rightSideRegisterNow'>Register Now</Link>
                </div>
              </Form>
            )}
            
          </Formik>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Login