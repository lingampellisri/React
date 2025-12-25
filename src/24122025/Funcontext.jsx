import React, { useState } from "react";
import context from './context';
import  Header from './Header';
function Funcontext(){
  const[theme,settheme]=useState("light");
  return(
    <context.Provider value={{theme,settheme}}><Header/></context.Provider>
  );
}
export default Funcontext;