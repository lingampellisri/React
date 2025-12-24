import {useState,useEffect} from "react";
function FunEffect(){
  const [count,setcount]=useState(0);
  const [name,setname]=useState("Nava");
  useEffect(()=>{
    console.log("component loaded");
  },[]);
  useEffect(()=>{
    console.log("count:",count);
  },[count]);
  useEffect(()=>{
    console.log("count1:",count);
  },[count,name]);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>console.log(data));
  },[]);
  useEffect(()=>{
    const timer=setInterval(()=>{
      console.log("Running");//running is executed for every 1 sec until component is unmounted(removed)
    },1000);
    return()=>clearInterval(timer);
  },[]);
  useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Run once after 1 second");//Executed one timeonly
  }, 1000);
   return () => clearTimeout(timer);
}, []);

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
       <h1>{name}</h1>
      <button onClick={()=>setname("Sri")}>changename</button>
    </div>
  );
}
export default  FunEffect;