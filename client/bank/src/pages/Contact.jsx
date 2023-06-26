import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import phone from '../assets/phone.png'
import contactImg from '../assets/contactimg.jpg'
import '../styles/pages/Contact.css'

const Contact = () => {
  document.title = 'Contact Customer Service - Zavtra Bank';


  const contactValues = {
    subject: '',
    email: '',
    message: '',
  }

  const contactSchema = Yup.object().shape({
    subject: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too long')
    .required('subject is required'),
    email: Yup.string().email('Invalid email').required('email required'),
    message: Yup.string().required('message is required')
  })

  const handleSubmit = async (values, actions) => {
    console.log(values);
    actions.resetForm()

    const validateFormData = await contactSchema.validate(values, {abortEarly: false})

    try {
      const responseEmail = await fetch('http://localhost:5174/sendEmail', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(validateFormData),
        })
        const response = await responseEmail.json()
        console.log(response.message);
        
    } catch(error) {
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
              <p className="contactNber">+7 (950) 229-46-42</p>
              <p className="contactNber">+7 (904) 554-19-61</p>
              <p className="contactNber">+234 (654) 54 88 65</p>
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
                <legend className='formTitle'>Send Us a message</legend>
                <Field 
                  type='text'
                  name='subject' 
                  placeholder='Your subject'
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
                  as='textarea'
                  type='textarea'
                  name='message' 
                  placeholder='message'
                  className='fieldControl fieldMessage'
                >
                  <textarea 
                    type='text'
                    name="message" 
                    placeholder='Message' className='fieldControl fieldMessage'>
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