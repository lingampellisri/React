import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'
import Welcome from './18122025/Welcome'
import Counter from './18122025/Funstate'
import Classcounter from './18122025/Classcounter'
import Greeting from './18122025/Testing'
import Dothis from './19122025/todo'
import Child from'./22122025/pro'
import Application from './22122025/Classprops'
import FunEffect from './23122025/FunEffect'
import MapReduceFilter from './23122025/MapReduceFilter'
import Funcontext from './24122025/Funcontext'
import Registration from './25122025/Registration'
import Success from './25122025/Success'
function App() {
   const [count, setCount] = useState(0)
 return (
  <>
      {/* <Hello/>            
       <Counter/> 
       <Child/>        
       <Classcounter/>  
        <Dothis/> 
      <Application/>
      <FunEffect/>
      <MapReduceFilter/>
      <Funcontext/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/Success" element={<Success/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}
export default App;