import React from 'react'

const Child = React.memo(({name,handleClick}) => {
    console.log("Child Component re-rendering!!!");
    
  return (
    <div>
      <button className='border border-black' onClick={handleClick}>{name}</button>
    </div>
  )
});

export default Child
