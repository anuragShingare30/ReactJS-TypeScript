import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, incrementByAmount,resetValue} from "./Redux/features/counterSlice";


const ReactRedux = () => {
    const [name,setName] =React.useState("");
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    function handleIncreament(){
        dispatch(increment());
    }

    function handleDecreament(){
        dispatch(decrement());
    }

    function handleReset(){
        dispatch(resetValue());
    }

    function handleInput(e){
        setName(e.target.value)
    }

    

  return (
    <div className='border border-black p-3 m-10'>
        <h1>React Redux Toolkit</h1>
        <div className='flex flex-col gap-10 m-4 items-center'>
            <button className='border border-black p-2' onClick={handleIncreament}>
                +
            </button>
            <p className='text-3xl'>Count: {count}</p>
            <button className='border border-black p-2' onClick={handleDecreament}>
                -
            </button>
            <button className='border border-black p-2' onClick={handleReset}>Reset</button>

            <input type="text" onChange={handleInput} className='border border-black'/>
        </div>
        <p className='text-3xl'>{name}</p>
    </div>
  )
}

export default ReactRedux;