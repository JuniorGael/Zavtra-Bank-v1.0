import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Banking.css";

const Banking = () => {
  document.title = "Zavtra - Banking";

  return (
    <div className="banking">
      <h1 className="titleSection">Zavtra <span className="green">Banking</span></h1>

      <section className="banking_wrapper">
        <section className="bankingLoans">
          <h2 className="bankingLoansTitle">Loans</h2>
          <ul className="unorderedBankingLoan">
            <li>Financial support depending on what you need.</li>
          </ul>
          <p className="bankingLoanDescription">
            We are always happy to assist our clients financially depending on
            their needs. There are different types of loans with which you
            decide when to pay back - at the end of each month, at the end of
            every 3 months, at the end of every 6 months or at the end of each
            year.
          </p>
          <p className="bankingLoanContact">
            For an accurate calculation of all the conditions individually,
            please <Link to="/contact-us" className="link">contact</Link> our manager directly.
          </p>
        </section>

        <section className="bankingDeposits">
          <h2 className="bankingDepositTitle">Deposits</h2>
          <ul className="unorderedBankingDeposit">
            <li>Grantees your money with a profit percentage that exceeds the
            competition.</li>
          </ul>
          <p className="bankingDepositDescription">
            Deposit is a savings product that holds an amount of money for a
            specified length of time. We will not only save your money, but also
            guarantee to pay you back the relevant amount of interest, based on
            how much you choose to deposit and for how long.
          </p>
        </section>
      </section>
    </div>
  );
};

export default Banking;
