import React from 'react'
import { useState } from 'react'

const Main = () => {
   const [show, setShow] = useState(false)
   const click = () => {
      setShow(!show)
   }
   return (
      <div className='' >
         <div onClick={() => click()} className="list">
            <i className='bi bi-list' ></i>
         </div>
         <div className={show ? "navbar3 navbar1" : "navbar3 navbar2"}>
            <div className="header">
               <h3>Coding <span style={{ color: "dodgerblue" }} >Addict</span></h3>
               <i onClick={() => click()} className='bi bi-plus' ></i>
            </div>
            <div className="ahref">
               <a href="">Home</a>
               <a href="">About</a>
               <a href="">Project</a>
               <a href="">Contact</a>
            </div>
            <div className="icons">
               <i className='bi bi-facebook' ></i>
               <i className='bi bi-twitter' ></i>
               <i className='bi bi-behance' ></i>
               <i className='bi bi-linkedin' ></i>
               <i className='bi bi-telegram' ></i>
            </div>
         </div>
      </div>
   )
}

export default Main