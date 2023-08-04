import React from 'react'
import img from "./product-1.jpeg"
import img1 from "./product-9.jpeg"
import img2 from "./product-10.jpeg"
function Context1() {
   return (
      <div>
         <div className="products">
            <h1><span style={{ color: "brown" }} >/</span> Featured</h1>
            <div className="cards">
               <div className="bir">
                  <img src={img1} alt="" />
                  <p>High-Back Bench</p>
                  <h5>$9.99</h5>
               </div>
               <div className="bir">
                  <img src={img} alt="" />
                  <p>High-Back Bench</p>
                  <h5>$9.99</h5>
               </div>
               <div className="bir">
                  <img src={img2} alt="" />
                  <p>High-Back Bench</p>
                  <h5>$9.99</h5>
               </div>
            </div>
            <button>All products</button>
         </div>
      </div>
   )
}

export default Context1