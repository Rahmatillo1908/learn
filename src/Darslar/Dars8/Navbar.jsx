import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
   return (
      <div>
         <Link to="/">
            <a href="">Home</a>
         </Link>
         <Link to="/dars1">
            <a href="">Dars1</a>
         </Link>
         <Link to="/dars2">
            <a href="">Dars2</a>
         </Link>
      </div>
   )
}

export default Navbar