import React, { useCallback } from 'react'

/**
 * using useCallback hook
 */

export const UseCallback = () => {
    
   const onClick = useCallback((btnName:string)=>{
        console.log(10,btnName)
   },[]);

  return (
    <div>
    <button onClick={() => onClick("A")}>A</button>
    <button onClick={() => onClick("B")}>B</button>
    <button onClick={() => onClick("C")}>C</button>
  </div>
  )
}


