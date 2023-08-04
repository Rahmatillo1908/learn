import React from 'react'
import { useState } from 'react'
const Dars4 = () => {
   const [counter, setCounter] = useState(0)
   const qushish = () => {
      setCounter(counter + 1)
   }
   const ayirish = () => {
      setCounter(counter == 0 ? counter : counter - 1)
   }
   const orqaga = () => {
      setCounter(0)
   }
   return (
      <div className="text-center" >
         <h1>Counter</h1>
         <h1 style={{ color: counter > 0 ? "green" : "black" }} >{counter}</h1>
         <button onClick={() => qushish()} className='m-5 btn btn-outline-success' >DECREASE</button>
         <button onClick={() => orqaga()} className='m-5 btn btn-outline-dark' >RESET</button>
         <button onClick={() => ayirish()} className='m-5 btn btn-outline-danger' >INCREASE</button>
      </div>
   )
}

export default Dars4