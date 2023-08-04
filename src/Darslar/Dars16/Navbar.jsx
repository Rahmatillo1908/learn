import React from 'react'

function Navbar({ filter, refs, setq }) {
  return (
    <div className='navbar' >
      <button onClick={() => setq("Marvel")} className='btn btn-outline-success'>Marvel</button>
      <button onClick={() => setq("Columbia")} className='btn btn-outline-success'>Columbia</button>
      <button onClick={() => setq("Pixar")} className='btn btn-outline-success'>Pixar</button>
      <button onClick={() => setq("Disney")} className='btn btn-outline-success'>Disney</button>
      <div>
        <input ref={refs} type="text" />
        <button onClick={filter} >Search</button>
      </div>

    </div>
  )
}

export default Navbar