import React, { useRef } from 'react'

const UseRef = () => {
    const [time,setTime] = React.useState(0);
    const timeRef = useRef(null);
    const btnRef = useRef(null);

    function handleStart(){
        timeRef.current = setInterval(() => {
            setTime(time => time+1);
        }, 100);
    }
    function handleStop(){
        clearInterval(timeRef.current);
        timeRef.current = null;
    }
    function handleReset(){
        handleStop();
        setTime(0);
    }
    // MANIPULATING DOM WITH REF
    function handleBtnRef(){
        btnRef.current.style.backgroundColor = "red";
    }

  return (
    <div className='border border-black m-10 p-3 flex flex-col'>
      <h1 className='text-3xl'>Use Reference Hook</h1>
      <div className='m-5'>
        <h1 className="text-2xl">Time: {time} Seconds</h1>
        <button 
            className='border border-black p-1' 
            onClick={handleStart}
            ref={btnRef}
            >
            Start
        </button>
        <br/>
        <button className='border border-black p-1' onClick={handleStop}>
            Stop
        </button>
        <br/>
        <button className='border border-black p-1' onClick={handleReset}>
            Reset
        </button>
        <br/>
      </div>
      <button onClick={handleBtnRef} className='border border-black p-1'>Change color of Start button</button>
    </div>
  )
}

export default UseRef;
