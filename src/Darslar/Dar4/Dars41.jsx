import React, { useState } from 'react'

const Dars41 = () => {
   const [close, setClose] = useState(true)
   return (
      <div className='mobile' style={{ color: close ? "aqua" : "gold" }} >
         {close ?
          <i onClick={() => setClose(false)} className='bi bi-list' ></i>
            : <i onClick={() => setClose(true)} className='bi bi-x' ></i>}
      </div>
   )
} 

export default Dars41