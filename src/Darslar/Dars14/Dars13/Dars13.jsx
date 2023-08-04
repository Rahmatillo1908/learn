import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Dars13() {
   const [data, setData] = useState([])
   const [qidiruv, setQidiruv] = useState("batman")
   useEffect(() => {
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=6095658c&s=${qidiruv}`)
         .then(response => response.json())
         .then(response => setData(response.Search))
   }, [data])
   console.log(data);
   const refs = useRef()
   const qidirish = () => {
      setQidiruv(refs.current.value)
   }
   return (
      <div className="div">
         <div className="navbar">
            <button className='btn btn-danger' onClick={() => setQidiruv("Marvel")} >Marvel</button>
            <button className='btn btn-danger' onClick={() => setQidiruv("Pixar")} >Pixar</button>
            <button className='btn btn-danger' onClick={() => setQidiruv("Columbia")} >Columbia</button>
            <button className='btn btn-danger' onClick={() => setQidiruv("Disney")} >Disney</button>
            <div>
               <input type="text" ref={refs} />
               <button onClick={qidirish} >Search</button>
            </div>
         </div>
         <div className='container' >
            <div className='row gap-4' >
               {
                  data ? data.map(item =>
                     <div className='card w-25 m-auto' key={item.imdbID} >
                        <img src={item.Poster} alt="" />
                        <h3>{item.Title}</h3>
                        <h5>{item.Year}</h5>
                     </div>
                  )
                     : "loading"
               }
            </div>
         </div>
      </div>
   )
}

export default Dars13;