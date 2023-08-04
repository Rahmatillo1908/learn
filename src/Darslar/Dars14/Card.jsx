import React from 'react'

function Card({ data }) {
   return (
      <div className='df' >
         {data ? data.map(item =>
            <div className='cards' >
               <div className="imgdiv">
                  <img src={item.img} alt="" />
               </div>
               <div className="cardBody">
                  <div className="cardText">
                     <h3>{item.title}</h3>
                     <p>{item.price}</p>
                  </div>
                  <p>{item.qushimcha}</p>
               </div>
            </div>
         )
            : "Loading"}
      </div>
   )
}

export default Card