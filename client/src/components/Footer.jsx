import { Link } from 'react-router-dom'
import '../styles/components/Footer.css'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {

  return (
    <div className='footer'>
      <div className="footerWrapper content-space-between">
        <div className="footerItems">
          <h3 className="footerContactTitle">Address:</h3>
          <p className="footerContactText">
            Russia, Nigeria, Cameroon
          </p>
        </div>
        <div className="footerItems">
          <h3 className="footerContactTitle">Contact lines:</h3>
          <p className="footerContactText">+7 (950) 229-46-42</p>
          <p className="footerContactText">+7 (904) 554-19-61</p>
          <p className="footerContactText">+234 (654) 54 88 65</p>
        </div>
        <div className="footerItems">
          <h3 className="footerContactTitle">Business Hours:</h3>
          <p className="footerContactText">Monday-Friday: 9am-7pm</p>
        </div>
        <div className="footerItems">
          <h3 className="footerContactTitle">Follow Us</h3>
          <div className="icons">
            <Link aria-label='facebook_icon' className="footerContactIcon smediaF">
              <FaFacebookF/>
            </Link>

            <Link aria-label='twitter_icon' className="footerContactIcon smediaT">
              <AiOutlineTwitter/>
            </Link>

            <Link aria-label='linkedin_icon' className="footerContactIcon smediaL">
              <FaLinkedinIn/>
            </Link>

            <Link aria-label='insatgram_icon' className="footerContactIcon smediaI">
              <AiOutlineInstagram/>
            </Link>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <p className="footerBottomText">© Copyright Zavtra Bank 2023. All rights reserved</p>
        <Link to='/infoSecurity' className='footerSecurity'>information security</Link>
      </div>
    </div>
  )
}

export default Footer