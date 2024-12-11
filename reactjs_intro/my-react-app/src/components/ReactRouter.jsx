import React from 'react'
import { NavLink,Link,useNavigate } from 'react-router';

// // INSATLLATION
// npm i react-router

export const ReactRouter = () => {
    const navigate = useNavigate();

  return (
    <div className='border border-black p-3 flex flex-row gap-10 m-10'>
        <NavLink to='/home' className={({isActive}) => isActive ? "text-red-900 font-bold" : "text-black"}>
            <h1>Home</h1>
        </NavLink>
        <NavLink to='/about' className={({isActive}) => isActive ? "text-red-900 font-bold" : "text-black"}>
            <h1>About</h1>
        </NavLink>

        <button 
            className='border border-black p-2 m-3'
            onClick={()=>{navigate('/dashboard')}}
            >
            Move to dash Page
        </button>  
    </div>
  ) 
}
