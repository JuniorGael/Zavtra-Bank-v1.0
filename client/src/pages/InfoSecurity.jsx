import React from 'react'
import banner from '../assets/banner2.webp'
import '../styles/pages/InfoSecurity.css'
import Accordion from '../components/Accordion'
import {data} from '../components/Data'

const InfoSecurity = () => {
  document.title = 'Zavtra Bank - InfoSecurity';
  return (
    <div className='infoSecurity'>
      <section className="banner">
        <img src={banner} aria-label="security banner" className='bannerImg'/>
        <h1 className="bannertitle">
          Information<br/> Security
        </h1>
      </section>

      <section className="infoSecurityWrapper">
        <h1 className="infoTitle">
          Do you think you are the victim of a scam? Discover<br/> the main fraud risks.
        </h1>

        {
          data.map((section, index ) => (
            <Accordion key={index} section={section}/>
          ))
        }
      </section>
    </div>
  )
}

export default InfoSecurity