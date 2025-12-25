import React, { useContext } from "react";
import context from './context'
function Navbar(){
  const{theme,settheme}=useContext(context);
  return(
    <div style={{
      background:theme==="light"?"white":"black",
       color: theme === "light" ? "black" : "white",
      padding: "10px"
    }}>
      <h2>MODE</h2>
      <button onClick={()=>settheme(theme=="light"?"dark":"light")}>Toggle</button>
    </div>
  );
}
export default Navbar;