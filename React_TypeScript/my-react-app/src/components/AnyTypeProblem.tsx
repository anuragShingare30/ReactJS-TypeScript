import React from 'react'

// any problem with children props/components

// React.ReactNode -> string|number|react element|...
// Instead of 'any' we can use 'React.ReactNode'
export const AnyTypeProblem = (props:{children:React.ReactNode}) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  )
}