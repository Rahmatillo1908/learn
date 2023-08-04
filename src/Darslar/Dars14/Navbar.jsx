import React from 'react'

function Navbar({ filter }) {
   return (
      <div className='navbars' >
         <h1>Our Menu</h1>
         <div className='buttons' >
            <button onClick={() => filter("all")}  >All</button>
            <button onClick={() => filter("breakfast")}  >Breakfast</button>
            <button onClick={() => filter("lunch")}  >Lunch</button>
            <button onClick={() => filter("shakes")}  >Shakes</button>
            <button onClick={() => filter("dinner")}  >Dinner</button>
         </div>
      </div>
   )
}

export default Navbar