import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../assets/aboutBanner.webp'
import ethic from '../assets/ethic.webp'
import focus from '../assets/focus.webp'
import drive2 from '../assets/drive2.webp'
import '../styles/pages/About.css'

const About = () => {
  document.title = 'About Us - Zavtra Bank';
  return (
    <div className='about'>
      <section className="aboutWrapper">
        <div className="aboutTitleSpace">
          <div className="aboutTitleSpaceItems">
            <h1 className="aboutTitle">About Us</h1>
            <p className="aboutDesc">
              We help aspiring people and businesses around the world save, spend, and transfer money— empowering more prosperous financial futures for their family, friends, and communities across borders.
            </p>
          </div>
          <Link to='/leadership' className='aboutLeadership'>Leadership</Link>
        </div>
        <div className="aboutTitleSpaceImage">
          <img src={aboutImg} aria-label="About image" />
        </div>
      </section>

      <section className="aboutContainer">
        <section className="aboutHistory">
          <h2 className="aboutHistoryTitle">Zavtra Bank History</h2>
          <p className="aboutHistoryDesc">
            Founded in mid-2019, Zavtra  was primarily  a student organization that financially supported  students   who couldn’t meet up their financial obligation toward  University, from one university to another,  we found ourselves being the  “go to “ solution to many students and parents. After graduation leaders of the association back then with no previous  economics or finance background decided to pursue education in top tier universities around the world. Equipped with better knowledge of  financial industry and great understanding of  World Economics. we understood the need of reliable  Investment  Financial institution  in Africa particularly   where access to liquidity  remain a great concern to SMI & SME  therefore  we thought  of  being  the X-factor that will drive   access to capital to businesses  and provide   great  ROI  to our investors.
          </p>
        </section>
          <div className="underline"></div>

        <section className="aboutMissions">
          <h2 className="aboutMissionsTitle">Our Missions</h2>
          <div className="aboutMissionOne">
            <div className="aboutMissionsImg">
              <img src={ethic} aria-label="Zavtra Bank ethic" />
            </div>
            <div className="aboutMissionsDescContainer">
              <h3 className="aboutMissionsDescTitle">Work ethic</h3>
              <p className="aboutMissionOneDesc">
                Our responsible business Strategy has a direct, positive impact on two areas critical to our growth: our strength and stability as a global financial institution; and our capacity to meet the financial needs of our clients in all phases of their lives.
              </p>
            </div>
          </div>
          <div className="aboutMissionTwo">
            <div className="aboutMissionsImg">
              <img src={focus} aria-label="Zavtra Bank ethic" />
            </div>
            <div className="aboutMissionsDescContainer">
              <h3 className="aboutMissionsDescTitle">Client focus</h3>
              <p className="aboutMissionOneDesc">
                We want to be a company that people want to do business with. Throughout our lines of activities, we look for ways to better serve our clients ‘needs in a way that upholds the highest ethical standards. We bring together the brightest minds across mathematics, engineering, finance and beyond. Passionate and unapologetic in applying our unique perspectives, we deliver results that shape markets and define careers.
              </p>
            </div>
          </div>
          <div className="aboutMissionOne">
            <div className="aboutMissionsImg">
              <img src={drive2} aria-label="Zavtra Bank ethic" />
            </div>
            <div className="aboutMissionsDescContainer">
              <h3 className="aboutMissionsDescTitle">Drive</h3>
              <p className="aboutMissionOneDesc">
                We do not accept the status quo and we are constantly looking to achieve what others think is impossible. That’s true not just in our careers, but also in our communities. With a focus on increasing access and opportunity so that people can pursue their dreams and realize their fullest potential, we act quickly, decisively and boldly in moments of great consequence to take on even the most difficult challenges, whether close to home or far afield.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default About