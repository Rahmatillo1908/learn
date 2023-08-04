import React from 'react'
import { useState } from 'react'

function Dars19() {
   const [heiht, setHeiht] = useState(true)
   return (
      <div>
         <div className="navbars">
            <div style={{height: heiht ? 55 : "auto" }} className="container">
               <img src="https://vanilla-js-basic-project-4-navbar.netlify.app/logo.svg" alt="" />
             <div className="menu">
                  <a href="">Home</a>
                  <a href="">About</a>
                  <a href="">Projects</a>
                  <a href="">Contact</a>
             </div>
             <div className="icons">
                  <i className="bi bi-facebook"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-behance"></i>
                  <i className="fa fa-linkedin"></i>
             </div>
             <div className="media">
                  <i onClick={()=>setHeiht(!heiht)} className='bi bi-list' ></i>
             </div>
            </div>
         </div>
      </div>
   )
}

export default Dars19