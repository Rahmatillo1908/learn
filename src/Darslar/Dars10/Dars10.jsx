import React from 'react'
import "./Dars10.css"
function Dars10() {
   return (
      <div>
         <div className="nav">
            <div className="navLogo">
               <h3>TESLA</h3>
            </div>
            <div className="navMenu">
               <a href="">Model S</a>
               <a href="">Model 3</a>
               <a href="">Model X</a>
               <a href="">Model Y</a>
               <a href="">Solar Roof</a>
               <a href="">Solar Panel</a>
               <a href="">PawerWall</a>
            </div>
            <div className="navMenu">
               <a href="">Shop</a>
               <a href="">Account</a>
               <a href="">Menu</a>
            </div>
         </div>
         <div className="home">
            <div className="homeTop">
               <h1>Model X</h1>
               <p>Explore Inventory</p>
            </div>
            <div className="homeBottom">
               <div className="homeTexts">
                  <div className="homeText">
                     <h3>333 mi</h3>
                     <p>Range (EPA est.)</p>
                  </div>
                  <div className="homeText">
                     <h3>2.5 s</h3>
                     <p>0-60 mph*</p>
                  </div>
                  <div className="homeText">
                     <h3>9.9s</h3>
                     <p>1/4 Mile</p>
                  </div>
                  <div className="homeText">
                     <h3>1,020 ph</h3>
                     <p>Peak Power</p>
                  </div>
               </div>
               <button>Order Now</button>
               <button>Demo Drive</button>
               <p>Specs displayed are Model X Plaid values.</p>
            </div>

         </div>
         <div className="two">
            <h1>Interior of the Future</h1>
         </div>
         <div className="three">
            <video autoPlay loop muted src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-X-Interior-Carousel-2-Yoke-Steering-Desktop-Global.mp4"></video>
         </div>
         <div className="four">

         <div className="spans">
            <span className="span">_</span>
            <span className="span">_</span>
            <span className="span">_</span>
            <span className="span">_</span>
            <span className="span">_</span>
            <h3>Yoke Steering</h3>
            <p>A bold new approach to steering offers better feel and an unobstructed view of the road ahead. Tap the brake and Model X automatically selects the correct direction to start your trip.</p>
         </div>
         </div>
      </div>
   )
}

export default Dars10