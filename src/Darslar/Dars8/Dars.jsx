import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Dars() {
   const [first, setfirst] = useState([])
   const apiKey = "8e239bce712f4013ad78e4cf7ba7cf92"
   useEffect(() => {
      fetch(`http://api.rawg.io/api/games?key=${apiKey}`)
         .then((res) => res.json())
         .then((res) => setfirst(res.results))
   }, [first])
   console.log(first);
   return (
      <div className='main' >
         {first.map((item) => {
            // console.log(first.short_screenshots.image)
            return (
               <div key={item.id}>
                  <h1>{item.name}</h1>
                  <h4>{item.rating}</h4>
                  <img src={item.background_image} alt="" />
                  <div className="maint">
                  </div>
               </div>)
         }
         )}
      </div>
   )
}

export default Dars