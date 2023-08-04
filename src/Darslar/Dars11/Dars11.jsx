import React from 'react'
import logo from "./logo-white.svg"
function Dars11() {
   return (
      <div className='home' >
         <div className="nav">
            <div className="navMenu">
               <a href="">Home</a>
               <a href="">Products</a>
               <a href="">About</a>
            </div>
            <img src={logo} alt="dfsgbg" />
            <div className='icon' >
               <i className='bi bi-basket' ></i>
            </div>
         </div>
         <div className="hero">
            <h1>Rest, Relax, Unwind</h1>
            <p>Embrace your choices - we do</p>
            <button>Shop now</button>
         </div>
      </div>
   )
}

export default Dars11