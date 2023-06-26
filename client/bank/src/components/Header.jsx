import React, { useEffect, useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import { AuthContext } from '../AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/logo4.png'
import '../styles/components/Header.css'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const { isLogin, getLogin } = useContext(AuthContext);


  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleLogout = () => {
    fetch('http://localhost:5174/logout', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      if(data.message === "Token have been cleared successfully!") {
        
        getLogin()
        toast.success("You logged out successfully!")
      } else {
        alert('error')
      }
    })
    .catch(err => console.error(err))
  }

  useEffect(() => {
      getLogin()
  }, [])

  return (
    <div className='header'>
      <Link to='/' className='headerLogoWrapper'>
        <img src={logo} aria-label="Zabtra bank logo" className='headerLogo'/>
        Zavtra<br/>Bank
      </Link>

      <div className={`menu-icon ${isOpen && 'open'}`} onClick={handleClick}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`header-menu ${isOpen && 'open'}`}>
        <div className="menuLinks">
          <NavLink 
            to='/' 
            className='headerLink active' 
            onClick={closeMenu}
            style={({ isActive }) => {
              return { color: isActive ? "#309478" : "" };
            }}
          >
            Home
          </NavLink>

          <NavLink 
            to='/banking' 
            className='headerLink' 
            onClick={closeMenu}
            style={({ isActive }) => {
              return { color: isActive ? "#309478" : "" };
            }}
          >
            Banking
          </NavLink>

          <NavLink 
            to='/about-us' 
            className='headerLink' 
            onClick={closeMenu}
            style={({ isActive }) => {
              return { color: isActive ? "#309478" : "" };
            }}
          >
            About Us
          </NavLink>

          <NavLink 
            to='/contact-us' 
            className='headerLink' 
            onClick={closeMenu}
            style={({ isActive }) => {
              return { color: isActive ? "#309478" : "" };
            }}
          >
            Contact Us
          </NavLink>

        </div>
        {
          isLogin 
          ? 
          <NavLink 
            className="headerItem-logout" 
            onClick={handleLogout}
            >
            Logout
          </NavLink>
          :
          <NavLink to='/login' className="headerItem" onClick={closeMenu}>Login</NavLink>
        }
        <ToastContainer />
      </div>
    </div>
  )
}

export default Header