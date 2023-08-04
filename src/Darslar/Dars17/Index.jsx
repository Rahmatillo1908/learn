import React from 'react'
import { useState } from 'react'

function Index() {
   const [first, setfirst] = useState()
   const clik = () => {
      localStorage.setItem("Ism", first)
   }
   const ochirish = () => {
      localStorage.clear("Ism")
   }
   // https://bootstrapmade.com/demo/WeBuild/
   return (
      <div>
         <input type="text" onChange={(e) => setfirst(e.target.value)} />
         <button onClick={clik} >Saqlash</button>
         <button onClick={ochirish} >O'chirish</button>
         <h1>{localStorage.getItem("Ism")}</h1>
      </div>
   )
}

export default Index