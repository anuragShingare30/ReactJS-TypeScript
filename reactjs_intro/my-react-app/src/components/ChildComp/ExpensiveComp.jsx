import React, { useCallback, useEffect } from 'react'

const ExpensiveComp = () => {
    const [count,setCount] = React.useState(0);
    const [text,setText] = React.useState("");
    const prevFunction = React.useRef(null);

    const expensiveCalculation = useCallback(()=>{
        console.log("running expensive calculation!!!");
        let result=0;
        for(let i=0;i<10000000;i++){
            result += i;
        }
        return result;
    },[count]);

    useEffect(() => {
      if (prevFunction.current) {
            if (prevFunction.current === expensiveCalculation) {
                console.log("function not got re-created!!!");
            } else {
                console.log("functin got re-created!!!");
            }
      } else {
        prevFunction.current = expensiveCalculation;
      }
    }, [expensiveCalculation])


  return (
    <div className='border border-black p-3 flex flex-col gap-5'>
      <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} className='border border-black'/>

      <p>Expensice calculation : {expensiveCalculation()}</p>

        <h1>count : {count}</h1>
      <button onClick={()=>{    
        setCount(count+1);
      }} className='border border-black'>Add</button>
    </div>
  )
}

export default ExpensiveComp
