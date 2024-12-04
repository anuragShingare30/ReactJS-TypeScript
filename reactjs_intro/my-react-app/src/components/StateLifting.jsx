import React from 'react'

export const StateLifting = ({name,setName}) => {
  return (
    <div className='flex flex-col items-center justify-center p-10'>
      <h1>Hello my Name is {name}</h1>
      <input type="text" onChange={(e)=>{setName(e.target.value)}} className='bg-red-300 text-white'/>
    </div>
  )
}


