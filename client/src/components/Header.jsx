import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/logo4.webp'
import '../styles/components/Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../state';

const Header = () => {

  const isLogin = Boolean(useSelector((state) => state.token))
  const isAdmin = useSelector((state) => state.isAdmin)
  
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleLogout = () => {
    closeMenu()
    fetch('/api/logout', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      if(data) {
        dispatch(setLogout())
        navigate('/')
        toast.success("You logged out successfully!")
      }
    })
    .catch(err => console.error(err))
  }

  return (
    <div className='header'>
      <Link to='/' className='headerLogoWrapper'>
        <img src={logo} aria-label="Zabtra bank logo" width={50} height={50} className='headerLogo'/>
        Zavtra<br/>Bank
      </Link>

      <div className={`menu-icon ${isOpen && 'open'}`} onClick={handleClick}>
        {isOpen ? 
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
          : 
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
        }
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

          {
            (isLogin && isAdmin) && (
              <NavLink 
            to='/dashboard'
            className='headerLink'
            onClick={closeMenu}
            style={({ isActive }) => {
              return { color: isActive ? "#309478" : "" };
            }}
          >
            Dashboard
          </NavLink>
            )
          }

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
      </div>
    </div>
  )
}

export default Header