import React from 'react'
import { useMemo } from 'react';

const UseMemo = () => {
    const [count, setCount] = React.useState(0);

    function increment(){
        setCount(count+1);
    }


    let testOperation;
    function expensiveTask(num){
        console.log("Runs on every expensive operation");
        for (let i = 0; i <1000000000; i++) {};
        return num*2;
    }

    console.time();
    testOperation = useMemo(()=>{expensiveTask(4)},[]);
    // testOperation = expensiveTask(4);
    console.timeEnd();

  return (
    <div className='border border-black m-10 p-3 flex flex-col'>
      <h1 className='text-3xl'>Use Memo hook</h1>
      
      <div className='m-10'>
        <h1 className='text-xl'>Count: {count}</h1>
        <button className='border border-black m-5' onClick={increment}>Add</button>
        <p>{testOperation}</p>
      </div>
    </div>
  )
}

export default UseMemo;
