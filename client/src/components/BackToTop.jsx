import React, { useEffect, useState } from 'react'
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
          <div className='scrollBtn' onClick={scrollUp}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="#ececec" strokeLinecap="round" strokeLinejoin="round" strokeWidth="40" d="M112 244l144-144 144 144M256 120v292"/></svg>
          </div>
        )
      }
    </div>
  )
}

export default BackToTop