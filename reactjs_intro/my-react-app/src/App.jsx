import React, { createContext, useState } from "react";
import {StateHook} from "./components/StateHook";
import {StateLifting} from "./components/StateLifting"
import { UseEffect } from "./components/UseEffect";
import { UseContext } from "./components/useContext";
import Home from "./components/RouterPages/Home";
import About from "./components/RouterPages/About";
import Dashboard from "./components/RouterPages/Dashboard";
import Profile from "./components/RouterPages/Profile";
import ErrorPage from "./components/RouterPages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router";
import UseParams from "./components/RouterPages/UseParams";
import {ReactRouter} from "./components/ReactRouter";
import UseForm from "./components/UseForm";
import ReactRedux from "./components/ReactRedux";
import UseRef from "./components/UseRef";
import UseMemo from "./components/UseMemo";
import UseCallBack from "./components/UseCallBack";

// Create Context
// Wrap the children inside an provider
// Pass the value through provider
// Consume data inside children
// const userContext = createContext();
// const themeContext = createContext();


function App() {
  const [name, setName] = React.useState("Anurag");
  const [theme, setTheme] = useState('light');

  return (
    <BrowserRouter>
      <div>
      
      {/* <StateHook /> */}

      {/* <StateLifting name={name} setName={setName}/>
      <h1>Hey there my name is {name}</h1> */}

      {/* <UseEffect></UseEffect> */}
      
      {/* <themeContext.Provider value={{theme,setTheme}}>
        <userContext.Provider value={{name,setName}}>
          <UseContext></UseContext>
        </userContext.Provider>
      </themeContext.Provider> */}

      {/* <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="profile" element={<Profile />}/>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login/:name" element={<UseParams />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ReactRouter></ReactRouter> */}
      

      <UseForm></UseForm>

      {/* <ReactRedux></ReactRedux> */}

      {/* <UseRef></UseRef> */}

      {/* <UseMemo></UseMemo>  */}

      {/* <UseCallBack></UseCallBack> */}


    </div>
    </BrowserRouter>
    
  )
}

export default App;
// export {userContext,themeContext};