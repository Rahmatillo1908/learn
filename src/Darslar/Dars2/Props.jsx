import React from 'react'

function Props(props) {
   return (
      <div className='main' >
         <h1>{props.malumot.name}</h1>
         <h1>{props.malumot.familya}</h1>
      </div>
   )
}

export default Props