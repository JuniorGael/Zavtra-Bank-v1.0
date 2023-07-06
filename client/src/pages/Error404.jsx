import React from 'react'
import '../styles/pages/Error404.css'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
  document.title = 'Zavtra Bank - Error404';
  return (
    <div className='error404Container'>
      <div className="error404-titles">
        <h1 className="errorTitle">404</h1>
        <p className="errorTxt">
          <span>Oops! La page que</span>&nbsp;
          <span>vous demandez n'existe pas.</span>
        </p>
      </div>
      <NavLink to="/" className="backToHome">
        Back to Home
      </NavLink>
    </div>
  )
}

export default Error404