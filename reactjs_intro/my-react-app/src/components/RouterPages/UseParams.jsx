import React from 'react'
import { useParams } from 'react-router'

const UseParams = () => {
    const {name} = useParams();
  return (
    <div>
      <h1>Use Params Hook</h1>
      <h1 className='text-red-500 font-bold'>{name}</h1>
    </div>
  )
}

export default UseParams
