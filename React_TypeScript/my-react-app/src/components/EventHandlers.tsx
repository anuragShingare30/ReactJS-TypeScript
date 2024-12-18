import React from 'react'


// Passing event handlers as a props.

interface ButtonProps {
    className: string;
    children: React.ReactNode;
    onSubmit:React.FormEventHandler<HTMLFormElement>
    onClick:React.MouseEventHandler<HTMLButtonElement>;

    // onClick:React.MouseEventHandler<HTMLElement>;
    // onClick:React.MouseEventHandler;
  }
  
    // children
  export const Children = ({ children, className, onClick,onSubmit }: ButtonProps) => {
    return (
        <div>
            <form className={className} onSubmit={onSubmit}>
                <input type="text" onChange={(e)=>{console.log(e.target.value)}}/>
                <button onClick={onClick} className={className}>
                    {children}
                </button>
            </form>
        </div>
    );
  };



    // parent
    export const Parent = ()=>{
        function handleInput(){
            console.log("btn clicked!!!");
        };
        function handleSubmit(){
            console.log("Form submitted!!!");
        }

        return <Children 
                    className='btn' 
                    onClick={handleInput} 
                    onSubmit={handleSubmit}
                    children="kuch bhi ho sakta hai" 
                    
                    />

    }
