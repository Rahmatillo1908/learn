import React, { useEffect } from 'react'
import { useState } from 'react'

function Dars9() {
   const [first, setfirst] = useState(0)
   useEffect( () =>{
      setTimeout( () =>{
         setfirst(first + 1)
      }, first===500? 100000:  .1)
   })
   const [first1, setfirst1] = useState(0)
   useEffect(() => {
      setTimeout(() => {
         setfirst1(first1 + 1)
      }, first1 === 17140 ? 100000 : .3)
   })
   const [first2, setfirst2] = useState(0)
   useEffect(() => {
      setTimeout(() => {
         setfirst2(first2 + 1)
      }, first2 === 1500 ? 100000 : .2)
   })
  return (
    <div className='w100'>
      <div className="w">
               <h1>{first}+</h1>
               <p>Lorem, ipsum.</p>
      </div>
      <div className="w1">
                 <h1>{first1}+</h1>
                 <p>Lorem, ipsum.</p>
      </div>
      <div className="w2">
                 <h1>{first2}+</h1>
                 <p>Lorem, ipsum.</p>
      </div>
    </div>
  )
}

export default Dars9