import React, { useState } from 'react'
import { useEffect } from 'react';

export const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(1);

    function handleCount(){
        setCount(count+1);
    }
    function handleTotal(){
        setTotal(total+1);
    }

    // // VARIATION1 : RUNS ON EVERY RENDER
    // useEffect(()=>{
    //     console.log("I will run on every render");
    // });

    // // VARIATION2 : RUNS ON ONLY FIRST RENDER
    // useEffect(()=>{
    //     console.log("I will run on every render");
    // }, []);

    // // VARIATION3 : RUNS WHEN DEPENDENCIES IS CHANGED
    // useEffect(()=>{
    //     console.log("I will run on every render");
    // }, [count]);

    // // VARIATION4 : MULTIPLE DEPENDENCIES
    // useEffect(()=>{
    //     console.log("I will run on every render");
    // }, [count,total]);

    // // VARIATION5 : ADDING CLEAN-UP FUNCTION
    // useEffect(()=>{
    //     console.log("I will run on every render");
    //     return ()=>{
    //         console.log("I will run when variable is unmounted");
    //     }
    // }, [count,total]);


  return (
    <div className='flex flex-col p-10 gap-2 items-center'>
      <button onClick={handleCount} className='border border-black p-1'>Count</button>
      <p>Count:{count}</p>

      <button onClick={handleTotal} className='border border-black p-1'>Total</button>
      <p>total:{total}</p>
    </div>
  )
}


