import { Link } from 'react-router-dom'
import '../styles/components/Footer.css'

const Footer = () => {

  return (
    <div className='footer'>
      <div className="footerWrapper content-space-between">
        <div className="footerItems">
          <span className="footerContactTitle">Address:</span>
          <p className="footerContactText">
            Russia, Nigeria, Cameroon
          </p>
        </div>
        <div className="footerItems">
          <span className="footerContactTitle">Contact lines:</span>
          <p className="footerContactText">+7 (950) 229-46-42</p>
          <p className="footerContactText">+7 (904) 554-19-61</p>
          <p className="footerContactText">+234 (654) 54 88 65</p>
        </div>
        <div className="footerItems">
          <span className="footerContactTitle">Business Hours:</span>
          <p className="footerContactText">Monday-Friday: 9am-7pm</p>
        </div>
        <div className="footerItems">
          <h3 className="footerContactTitle">Follow Us</h3>
          <Link className="footerContactText smediaF">Facebook</Link>
          <Link className="footerContactText smediaT">Twitter</Link>
          <Link className="footerContactText smediaL">LinkedIn</Link>
          <Link className="footerContactText smediaI">Instagram</Link>
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