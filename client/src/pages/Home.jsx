import { Link, useNavigate } from 'react-router-dom'
import {HiArrowSmRight} from 'react-icons/hi'
import homeBanner from '../assets/bank2.webp'
import loan from '../assets/icon1.webp'
import bankWork from '../assets/bankWork.webp'
import author from '../assets/authorImg.webp'
import '../styles/pages/Home.css'
import { useSelector } from 'react-redux'



const Home = () => {
  document.title = 'Zavtra Bank - Together We Build Today and Tomorrow';

  const isLogin = Boolean(useSelector(state => state.token))
  const navigate = useNavigate()

  const handleFillForm = () => {
    if(isLogin) {
      navigate('/forms')
    } else {
      navigate('/login')
    }
  }

  return (
    <div className='home'>
      <section className="homeBanner">
        <img src={homeBanner} aria-label="home banner" className='homeBannerImg'/>
        <div className="bannerText">
          <h1 className="bannerTitle">How much do<br/> you need?</h1>
          <p className="bannerDesc">Making it Easy for You</p>
          <button onClick={handleFillForm} className="bannerBtn">Fill the form</button>
        </div>
      </section>

      <section className="loans">
        <div className="loansItems">
          <img src={loan} aria-label="loan image" className='loanImg'/>
          <div className="loansItem">
            <h2 className="loansTitle">MONTHLY LOAN</h2>
            <p className="loansDesc">
              With this offer you can pay us back at the end of each month
            </p>
          </div>
        </div>
        <div className="loansItems">
          <img src={loan} aria-label="loan image" className='loanImg'/>
          <div className="loansItem">
            <h2 className="loansTitle">QUARTERLY LOAN</h2>
            <p className="loansDesc">
              With this offer you can reimburse us at the end of every 3 months
            </p>
          </div>
        </div>
        <div className="loansItems">
          <img src={loan} aria-label="loan image" className='loanImg'/>
          <div className="loansItem">
            <h2 className="loansTitle">SEMI-ANNUAL LOAN</h2>
            <p className="loansDesc">
              With this offer you can reimburse us at the end of every 6 months
            </p>
          </div>
        </div>
        <div className="loansItems">
          <img src={loan} aria-label="loan image" className='loanImg'/>
          <div className="loansItem">
            <h2 className="loansTitle">ANNUAL LOAN</h2>
            <p className="loansDesc">
              With this offer you can pay us back at the end of each year
            </p>
          </div>
        </div>
      </section>

      <section className="bankProcedure">
        <div className="bankProcedureBgTitle">
          <h2 className="bankProcedureTitle">
            How it works at Zavtra Bank?
          </h2>
        </div>
      </section>

      <section className="container">
        <section className="bankProcedureWrapper">
          <img src={bankWork} alt="bank procedure title" className='bankImg'/>
          <div className="bankProcedureText">
            <div className="bankprocedureItems">
              <div className="arrowContainer">
                <HiArrowSmRight />
              </div>
              
              <span className="bankprocedureDesc">
                Create an <Link to='/register' className='linkTo'>account</Link> or log in
              </span>
            </div>
            <div className="bankprocedureItems">
              <div className="arrowContainer">
                <HiArrowSmRight />
              </div>
              <span className="bankprocedureDesc">
                Download the loan form and fill it
              </span>
            </div>
            <div className="bankprocedureItems">
              <div className="arrowContainer">
                <HiArrowSmRight />
              </div>
              <span className="bankprocedureDesc">
              <Link to='/login' className='linkTo'>Log in</Link> to     your account and submit a form
              </span>
            </div>
            <div className="bankprocedureItems">
              <div className="arrowContainer">
                <HiArrowSmRight />
              </div>
              <span className="bankprocedureDesc">
                Our administrators respond to you ASAP
              </span>
            </div>
          </div>
        </section>
        <section className="homePresentation">
          <div className="authorContainer">
            <div className="authorQuote">
            <p >
              Our motto being “Together we build Today and Tomorrow”. 
              We adapt it into a culture of excellence, continuously learning, rewarding and winning integrity.
            </p>
            <span className='arrowQuote'></span>
            </div>
            <div className="homeAuthorDesc">
              <img src={author} aria-label="author image" className='authorImg'/>
              <h3 className="authorName">Franck Yossa</h3>
              <span className="authorFct">
                Managing Director, M&A Division
              </span>
              <p className="authorMail">Franky@zavtraBank.com</p>
            </div>
          </div>

          <div className="teamQuote">
            <p className="teamQuoteDesc">
              Our team is driven by your success. Every single day we'll support your business and help you to succeed
            </p>
          </div>
        </section>
      </section>

    </div>
  )
}

export default Home