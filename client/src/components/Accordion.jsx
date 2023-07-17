import React, { useCallback, useState } from 'react'
import '../styles/components/Accordion.css'

const Accordion = ({section, index}) => {
   const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => {
    setIsOpen((isOpen) => !isOpen)
  }, [setIsOpen])

  return (
    <div className='accordionContainer'>
      <div className="columnContainer" 
      key={index} 
      onClick={toggle}
      style={{
        color: `${isOpen ? "var(--secondary2-color)" : ""}`
      }}
      >
        <div className="columnTitle">{section.title}</div>
        <button title='dropdown arrow ' className='expendableBtn'>
            <svg 
              style={{
              transform: `rotate(${isOpen ? 180 : 0}deg)`,
              transition:'all 0.3s',
            }} 
              xmlns="http://www.w3.org/2000/svg" 
              height="30" 
              viewBox="0 -960 960 960" 
              width="30">
              <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/>
            </svg>
        </button>
      </div>

      {
        isOpen && 
        (
          <div className="contentContainer">
            <p className="contentText">{section.content}</p>
            <div className="headingContainer">
              <h4 className="headingTitle">{section.heading1}</h4>
              <ul className="listWrapper">
                <li className="list">{section.list1}</li>
                <li className="list">{section.list2}</li>
                <li className="list">{section.list3}</li>
              </ul>
            </div>
            <p className="headingText">
              {section.text} <strong>{section.strong}</strong>
            </p>
            <div className="headingContainer">
              <h4 className="headingTitle">{section.heading2}</h4>
              <ul className="listWrapper">
                <li className="list">{section.list4}</li>
                <li className="list">{section.list5}</li>
              </ul>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Accordion