import React from "react";


// passing all props of React HTML Element to its parent.
// Using the 'ComponentProps' Type Helper
// we can can pass a native type to ComponentProps to grap all of its props



export const Children = ({...rest}:React.ComponentProps<'button'>)=>{
    return (
        <button {...rest}>
                Click me!!!
        </button>
    );
}


export const Parent = ()=>{

    return(
        <Children onClick={()=>{}} onSubmit={()=>{}}></Children>
    );
}