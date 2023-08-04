import React from 'react'
import { useState } from 'react'
import Menu from '../../data'
import Card from './Card'
import Navbar from './Navbar'

function Dars14() {
   const [data, setdata] = useState(Menu)

   const filter = (cate) => {
      if (cate === "all") {
         setdata(Menu)
         return
      }
      const news = Menu.filter(item => item.category === cate)
      setdata(news)
   }
   return (
      <div>
         <Navbar filter={filter} />
         <Card data={data} />
      </div>
   )
}

export default Dars14