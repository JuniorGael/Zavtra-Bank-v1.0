import React, { useCallback, useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
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
        color: `${isOpen ? "var(--secondary3-color)" : ""}`
      }}
      >
        <div className="columnTitle">{section.title}</div>
        <button className='expendableBtn'>
          <span className="material-symbols-outlined" style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition:'all 0.3s',
            fontSize: '30px',
          }}>
            <IoIosArrowDown />
          </span>
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