import React from 'react'


// Omit utility type
// Overriding and removing components props
// We are extracting some props from defined props

export const Children = ({method,...rest}:{method:string} & Omit<React.ComponentProps<'button'>,'className'>)=>{
    return (
        <button {...rest}>
                {method}
        </button>
    );
}


export const Parent = ()=>{

    return(
        <Children onClick={()=>{}} method=""></Children>
    );
}


