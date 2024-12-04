import React from 'react'
import { useState } from 'react';

export const StateHook = () => {
    const [count, setcount] = useState(0);

  return (
    <div >
      <h1>You have clicked the button {count} times</h1>
      <button onClick={()=>{setcount(count+1)}}>Add</button>
      <button onClick={()=>{setcount(count-1)}}>Sub</button>
    </div>
  )
}


