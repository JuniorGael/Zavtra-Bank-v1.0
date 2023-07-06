import React, { useEffect, useState } from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import '../styles/components/BackToTop.css'

const BackToTop = () => {

  const [scrollToTop, setScrollToTop] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setScrollToTop(true)
      } else {
        setScrollToTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div>
      {
        scrollToTop && (
          <BsFillArrowUpCircleFill className='scrollBtn' onClick={scrollUp}/>
        )
      }
    </div>
  )
}

export default BackToTop