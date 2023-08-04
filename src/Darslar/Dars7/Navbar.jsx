import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
   return (
      <div className='nimadir' >
         <Link to="/" >
            <span>asosiy sahifa</span>
         </Link>
         <Link to="/new">
            <span>New</span>
         </Link>
         <Link to="/html" >
            <span>Html</span>
         </Link>
      </div>
   )
}

export default Navbar