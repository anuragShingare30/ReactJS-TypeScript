import React, { createContext, useState } from "react";
import {StateHook} from "./components/StateHook";
import {StateLifting} from "./components/StateLifting"
import { UseEffect } from "./components/UseEffect";
import { UseContext } from "./components/useContext";


// Create Context
// Wrap the children inside an provider
// Pass the value through provider
// Consume data inside children
const userContext = createContext();
const themeContext = createContext();


function App() {
  const [name, setName] = React.useState("Anurag");
  const [theme, setTheme] = useState('light');

  return (
    <div>
      
      {/* <StateHook /> */}

      {/* <StateLifting name={name} setName={setName}/>
      <h1>Hey there my name is {name}</h1> */}

      {/* <UseEffect></UseEffect> */}
      
      <themeContext.Provider value={{theme,setTheme}}>
        <userContext.Provider value={{name,setName}}>
          <UseContext></UseContext>
        </userContext.Provider>
      </themeContext.Provider>

    </div>
  )
}

export default App;
export {userContext,themeContext};