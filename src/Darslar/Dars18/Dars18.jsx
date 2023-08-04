import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Dars18() {
   const [qd, setQd] = useState()
   const [gets, setGets] = useState()
   const [word, setWord] = useState("")
   useEffect(() => {
      setQd(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${""}x${""}`)
   })
   const clik = () => {
      setWord(gets)
   }
   console.log(qd);
   return (
      <div>
         <input type="text" onChange={(e) => setGets(e.target.value)} />
         <button onClick={clik}>Olish</button>
         <img src={qd} alt="" />
         <a href={qd}>Download</a>
      </div>
   )
}

export default Dars18