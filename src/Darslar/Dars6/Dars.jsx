import React from 'react'
import Menu from "./data"
import Card from "./Card"
function Dars() {
   const data = Menu
   console.log(data);
   return (
      <div className='data' >
         <button className='btn btn-success m-4' >All</button>
         <button className='btn btn-success m-4' >Breakfast</button>
         <button className='btn btn-success m-4' >Dinner</button>
         <button className='btn btn-success m-4' >lunch</button>
         <div className="display">
            {data.map((item, index) =>
               <div className="cards">
                  <div className="imgdiv">
                     <img src={item.img} alt="" />
                  </div>
                  <div className="textCard p-2">
                     <div className="priceCard">
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                     </div>
                     <p>{item.qushimcha}</p>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

export default Dars