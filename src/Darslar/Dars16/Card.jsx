import React from 'react'

function Card({ data }) {
   return (
      <div className='row gap-5 justify-content-around mt-5 ' >
         {data ? data.map(item =>
            <div className='card w-25' style={{ height: 500 }} >
               <img src={item.Poster} alt="" className='h-75' />
               <div className="card-body">
                  <h5>{item.Title}</h5>
                  <p>{item.Year}</p>
               </div>
            </div>
         ) : "loading"}
      </div>
   )
}

export default Card