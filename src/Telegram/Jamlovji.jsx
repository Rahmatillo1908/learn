import React from 'react'
import Chats from './Chats'
import Menu from './Menu'
import Tel from './Tel'

function Jamlovji() {
   return (
      <div className='d-flex' >  
         <Tel />
         <Menu />
         <Chats/>
      </div>
   )
}

export default Jamlovji