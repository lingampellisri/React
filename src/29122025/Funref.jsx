import React,{useEffect,useRef} from "react";
function Login(){
  const username=useRef(null);
  useEffect(()=>
  {
    username.current.focus();
  },[]);
return(
  <div>
    <h2>Login</h2>
    <label>Username</label>
    <input type="text" ref={username}/><br/>
    <label>Password</label>
    <input type="password"/><br/>
    <button>Login</button>
  </div>
);
}
export default Login;