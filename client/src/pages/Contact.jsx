import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import phone from '../assets/phone.webp'
import contactImg from '../assets/contactimg.webp'
import '../styles/pages/Contact.css'
import {toast} from "react-toastify"
import { Link } from 'react-router-dom';

const Contact = () => {
  document.title = 'Contact Customer Service - Zavtra Bank';


  const contactValues = {
    username: '',
    email: '',
    subject: '',
    message: '',
  }

  const contactSchema = Yup.object().shape({
    username: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too long')
    .required('username is required'),
    subject: Yup.string()
    .required('subject is required'),
    email: Yup.string().email('Invalid email').required('email required'),
    message: Yup.string().required('message is required')
  })

  const handleSubmit = async (values, actions) => {
    actions.resetForm()

    try {
      const responseEmail = await fetch('/api/sendEmail', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(values),
        })
        const response = await responseEmail.json()
        toast.success(response.message);
        
    } catch(error) {
      toast.error(error.message);
      console.log(error.message);
    }
  }

  return (
    <div className='contact'>
      <section className="contactContainer">
        <h1 className="contactTitle">
          Contact <span className='green'>Zavtra Bank</span>
        </h1>
      </section>
      <section className="contactWrapper">
        <div className="contactHeading">
          <h2 className="contactHeadingTitle">
            We’re happy to answer any questions you may have
          </h2>
          <p className="contactHeadingDesc">
            Get in touch with our Customer Care representative.
          </p>
        </div>
        <div className="contactOnlineTchat">
          <img src={phone} aria-label="contact tchat" className='contactTchatImg'/>
          <div className="contactOnlineText">
            <div className="contactItems">
              <Link to='tel: +7 (950) 229-46-42'  className="contactNber">
                +7 (950) 229-46-42
              </Link>
              <Link to="tel: +7 (904) 554-19-61" className="contactNber">
                +7 (904) 554-19-61
              </Link>
              <Link to="tel: +234 (654) 54 88 65" className="contactNber">
                +234 (654) 54 88 65
              </Link>
              {/* <p className="contactNber">+7 (950) 229-46-42</p>
              <p className="contactNber">+7 (904) 554-19-61</p>
              <p className="contactNber">+234 (654) 54 88 65</p> */}
            </div>
          </div>
        </div>

        <div className="contactmiddle">Or</div>

        <div className="contactForm">
          <div className="contactImg">
            <img src={contactImg} aria-label="contact form" />
          </div>

          <Formik
            initialValues={contactValues}

            validationSchema={contactSchema}

            onSubmit={handleSubmit}
          >
            {() => (

              <Form 
                className='formContact'
              >
                <legend className='formTitle'>Send us a message</legend>
                <Field 
                  type='text'
                  name='username' 
                  placeholder='username'
                  className='fieldControl widthL'
                />
                <ErrorMessage 
                  component='label'
                  className='form_label text-danger'
                  name='subject' />

                <Field 
                  type='text'
                  name='email' 
                  placeholder='Email'
                  className='fieldControl widthR'
                />
                <ErrorMessage 
                  component='label'
                  className='form_label text-danger'
                  name='email' />

                <Field 
                  type='text'
                  name='subject' 
                  placeholder='Subject'
                  className='fieldControl widthR'
                />
                <ErrorMessage 
                  component='label'
                  className='form_label text-danger'
                  name='subject' />

                <Field 
                  as='textarea'
                  type='textarea'
                  name='message' 
                  placeholder='Message'
                  className=' fieldMessage'
                >
                  <textarea 
                    type='textarea'
                    name="message" 
                    placeholder='Message'
                    className='textarea'>
                  </textarea>
                </Field>
                <ErrorMessage 
                  component='label'
                  className='form_label text-danger'
                  name='message' />

                <button type='submit' className="contactBtn">Send Message</button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  )
}

export default Contact