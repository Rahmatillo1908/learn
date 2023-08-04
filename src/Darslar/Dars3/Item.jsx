import React from 'react'
import { useRef } from 'react'

const Item = ({ active, item, handleToggle, index }) => {
   const currents = useRef(null);
   const { question, incorrect_answers } = item
   return (
      <>
         <header className={active === index ? "active" : ""}
            onClick={() => handleToggle(index)}
         >
            <h2>{question}</h2>
            <span>question</span>
         </header>
         <div ref={currents} className={`collapse ${active
            === index ? " show" : ""}`}
            style={active === index ? {
               height: currents.current.scrollHeight
            } : { height: "0px" }} >
            <p>{incorrect_answers[1]}</p>
         </div>
      </>
   )
}

export default Item