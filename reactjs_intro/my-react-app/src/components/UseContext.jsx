import React, { useContext } from 'react'
// import {userContext,themeContext} from "../App";

export const UseContext = () => {
    const {name,setName} = useContext(userContext);
    const {theme, setTheme} = useContext(themeContext);

    function handleTheme(){
        if(theme == "light"){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }

  return (
    <div>
      <h1>Hey my name is {name}</h1>
      <input type="text" onChange={(e)=>{setName(e.target.value)}}/>

      <div 
        className='border border-black p-4 h-28 w-48 m-10' 
        style={{backgroundColor:theme == "light" ? "red" : "blue"}}
        >
        <button className='border border-black p-1 bg-gray-700 text-white' onClick={handleTheme}>change Theme</button>
      </div>
    </div>
  )
}

