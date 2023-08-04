import React, { useState, useEffect } from 'react'
import Item from './Item'
import "./Dars3.css"
const Dars3 = () => {
  const [active, setactive] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=4")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);
  console.log(data);
  const handleToogle = (index) => {
    if (active === index) {
      setactive(null)
    }
    else {
      setactive(index)
    }
  }
  return (
    <article>
      {data ? data.results.map((item, index) => {
        return (
          <Item
            index={index}
            active={active}
            item={item}
            handleToggle={handleToogle} />
        )
      }) : "hello"}
    </article>
  )
}

export default Dars3