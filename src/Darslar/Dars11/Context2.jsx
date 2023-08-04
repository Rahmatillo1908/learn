import React from 'react'
import { useContext } from 'react'
import { Malumot } from './Malumot'

function Context2() {
   const ixtiyoriy = useContext(Malumot)
   return (
      <h1>Context2 {ixtiyoriy}</h1>
   )
}

export default Context2