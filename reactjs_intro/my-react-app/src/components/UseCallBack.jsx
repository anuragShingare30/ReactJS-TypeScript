import React, { useCallback, useMemo, useState } from 'react'
import Child from './ChildComp/Child';
import ExpensiveComp from './ChildComp/ExpensiveComp';

const UseCallBack = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, []);



    return (
        <div className='border border-black p-3 m-10'>
            <h1 className='text-3xl'>Use CallBack Hook</h1>
        
      <div>
        <h1>{count}</h1>
        <button onClick={handleClick} className='border border-black'>Add</button>
      </div>
      <Child name={"click me"} handleClick={handleClick}></Child>

        <ExpensiveComp></ExpensiveComp>

        </div>
    )
}

export default UseCallBack;
 