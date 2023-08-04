import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Card from './Card'
import Navbar from './Navbar'

function Dars16() {
   const [apis, setApis] = useState([])
   const [qidiruv, setQidiruv] = useState("spider")
   useEffect(() => {
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=6095658c&s=${qidiruv}`)
         .then(response => response.json())
         .then(data => setApis(data.Search))
   }, [apis])

   const refs = useRef()
   const filter = ()=>{
      setQidiruv(refs.current.value)
   }
   return (
      <div>
         <div>
            <Navbar filter={filter} setq={setQidiruv} refs={refs} />
         </div>
         <Card data={apis} />
      </div>
   )
}

export default Dars16