import React from 'react'
import img from "./download.png"
const Dars22 = () => {
  return (
    <div className='bodyImg' >
      <div className="home">
        <div className="homeImg">
          <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg" alt="" />
        </div>
        <div className="homeText">
          <h1>Spider-Man: Across the Spider-Verse (2023)</h1>
          <p>PG
            06/02/2023 (US)
            Action, Adventure, Animation, Science Fiction
            2h 20m</p>
          <div className="about d-flex">
            <div className="img">
              <img src={img} alt="" />
              <h3>87%</h3>
            </div>
            <p>User Score</p>
            <i className='fa fa-list' ></i>
            <i className='fa fa-heart' ></i>
            <i className='fa fa-bookmark' ></i>
            <i className='fa fa-star' ></i>
            <h4 className='d-flex align-items-center' ><i className='fa fa-play' ></i> Play Trailer</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dars22