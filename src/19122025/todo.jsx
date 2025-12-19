import {useState} from "react";

function Dothis(){
  var[task,set]=useState([]);
  var[input,setin]=useState("");
   const deleteTask=(index)=>{
     const newTasks=task.filter((_,i)=>i!==index);//new Array is created and i value is removed (if  i==index)
     set(newTasks);//React re-renders UI automatically
  };
      return(
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "100vh",
      paddingTop: "20px"
    }}>
        <h1>TO-DO LIST</h1>
        <div>
        <input type="text" value={input} onChange={(e)=>setin(e.target.value)}></input>
      <button onClick={()=>set([...task,input],
      setin("")
      )}style={{backgroundColor:"green"}} > Add</button></div>
      {task.map((t,ind)=>(<div key={ind}><span>{t} </span>
      <span onClick={()=>deleteTask(ind)}style={{cursor:"pointer"}}>❌ </span></div>))
}
      </div>
      )
}
export default Dothis;
