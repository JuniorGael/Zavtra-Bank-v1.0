import React from 'react'
import { leaderData } from '../components/LeaderData'
import '../styles/pages/Leadership.css'

const Leadership = () => {
  document.title = 'Zavtra Bank - Leadership';
  return (
    <div className='leadershipContainer'>
      <section className="leadershipHeading">
        <h1 className="leadershipTitle">Leadership</h1>
        <p className="leadershipDesc">
          Our leadership team remains true to our vision and values, putting customers’ evolving needs at the center of our innovation and holding up trust and convenience as the hallmarks of our business.
        </p>
      </section>

      <div className="leadContainer">
        {
          leaderData.map((item) => (
            <section key={item.id} className="LeadAuthor">
              <img src={item.leadImage} alt="leadership Team image" className="leadAuthorImg"/>
              <h2 className="leadAuthorName">{item.leadName}</h2>
              <span className="leadAuthorPos">{item.leadPosition}</span>
            </section>
          ))
        }
      </div>
    </div>
  )
}

export default Leadership