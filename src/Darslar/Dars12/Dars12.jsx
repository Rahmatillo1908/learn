import { React, useEffect, useState, useRef } from 'react'

function Dars12() {
   const [first, setfirst] = useState("")

   const id = [
      {
         title: "Akbar"
      },
      {
         title: "Akmal"
      },
      {
         title: "Asror"
      },
      {
         title: "Ali"
      },

   ]
   return (
      <div >
         <input type="text" onChange={(e) => setfirst(e.target.value)} />
         {id.filter(nimadir => {
            return first === "" ? nimadir : nimadir.title.includes(first)
         })
            .map(nimadir =>
               <h1>{nimadir.title}</h1>
            )
         }
      </div>
   )
}

export default Dars12