import React from 'react'
import Menus from "../data"
function Menu() {
   return (
      <div className='menu' >
         <div className="input">
         <input type="text" placeholder='Search' />
         </div>
         <div>
            {Menus.map(item =>
               <div className='item' >
                  <img src={item.img} alt="" />
                  <div className="cards">
                     <h3>{item.title}</h3>
                     <p>{item.qushimcha}</p>
                  </div>
                  <h5>{item.price}</h5>
               </div>
            )}
         </div>
      </div>
   )
}

export default Menu