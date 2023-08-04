import React from 'react'
import { useState } from 'react'

const Dars5 = () => {


   const [word, setWord] = useState("Width ni kiriting")
   const [name, setName] = useState("")
   const [heih, setHeih] = useState("height ni kiriting")

   return (
      <div>
         <input type="text" onChange={(e) => setHeih(e.target.value)} />
         <input type="text" onChange={(e) => setWord(e.target.value)} />
         <input type="text" onChange={(w) => setName(w.target.value)}
            placeholder="rangni kiriting " />
         <div className='main' style={{ background: name, width: word, height: heih }} ></div>
      </div>
   )
}

export default Dars5