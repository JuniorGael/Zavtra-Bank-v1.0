import React, { useContext, useEffect } from 'react'
import '../styles/pages/Forms.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

const Forms = () => {

  const navigate = useNavigate()

  const { isLogin } = useContext(AuthContext)

  useEffect(() => {
    if(!isLogin) {
      navigate('/')
    }
  }, [isLogin])

  return (
    <div className='forms'>
      <h1 className="formsTitle">Zavtra Bank Forms</h1>

      <section className="Wrapper">
        <div className="wrapperHeading">
          <h2 className='wrapperHeadingTitle'>Discover the 2 differents requests forms available to you</h2>
          <p className='wrapperHeadingDesc'>You can choose the form according to your request</p>
        </div>

        <div className="formsLinkWrapper">
          <div className="depositWrapper">
            <h3 className="depositTitle">Deposit Forms</h3>
            <p className="depositDesc">
              Depositing at zavtra bank guarantees your money with a profit percentage that exceeds the competition. So if you wish to make a deposit with us, please complete the forms below and you can download these forms in pdf to ensure your credibility with our bank.
            </p>
            <div className="linksContainer">
              <Link to='/deposit-aca' className='depositLink'>
                Notice of executive Deposit Agreement
              </Link>
              <Link to='/agreement' className='depositLink'>
                Deposit Agreement
              </Link>
              <Link to='/slip' className='depositLink'>
                Deposit Slip
              </Link>
            </div>
          </div>

          <div className="depositWrapper">
            <h3 className="depositTitle">Debt Form</h3>
            <p className="depositDesc">
              At zavtra bank, we are always happy to assist our clients financially depending on their needs. we can offer 4 types of loans (
                <strong> Montly Loan</strong>, 
                <strong> Quarterly Loan</strong>,
                <strong> Semi-annual Loan</strong>,
                <strong> Annual Loan</strong>
              )
              choose which one suits you best. To take a loan, please fill the form below and dowload it .
            </p>
            <Link to='/debt' className='debtLink'>
              Debt acknowledgment
            </Link>
          </div>
          <p className="noteDesc">
            <strong>Note: </strong>
            For any misunderstanding or questions, please 
            <Link className='noteLink' to='/contact-us'>Contact Us</Link>
          </p>
        </div>

      </section>

    </div>
  )
}

export default Forms