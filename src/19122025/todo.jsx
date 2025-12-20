// import {useState} from "react";

// function Dothis(){
//   var[task,set]=useState([]);
//   var[input,setin]=useState("");
//    const deleteTask=(index)=>{
//      const newTasks=task.filter((_,i)=>i!==index);//new Array is created and i value is removed (if  i==index)
//      set(newTasks);//React re-renders UI automatically
//   };
//       return(
//       <div style={{
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "flex-start",
//       height: "100vh",
//       paddingTop: "20px"
//     }}>
//         <h1>TO-DO LIST</h1>
//         <div>
//         <input type="text" value={input} onChange={(e)=>setin(e.target.value)}></input>
//       <button onClick={()=>set([...task,input],
//       setin("")
//       )}style={{backgroundColor:"green"}} > Add</button></div>
//       {task.map((t,ind)=>(<div key={ind}><span>{t} </span>
//       <span onClick={()=>deleteTask(ind)}style={{cursor:"pointer"}}>❌ </span></div>))
// }
//       </div>
//       )
// }
// export default Dothis;
import React from "react";
import "./App1.css";
class Dothis extends React.Component{  
        constructor(){
        super();
        this.state={
          tasks:[],
           input:""
        };
      }
        changeinput=(e)=>{
          this.setState({input:e.target.value});
        };
        add=()=>{
          this.setState({
            tasks:[...this.state.tasks,this.state.input],
             input:""
          });
        };
        deletetask=(index)=>{
          const newtask=this.state.tasks.filter((_,i)=>i!==index);
          this.setState({tasks:newtask});
        };
    render(){
      return(
         <div style={{
     display: "flex",
     flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
     height: "100vh",
      paddingTop: "20px"
     }}>
          <h1>TODO LIST</h1>
          <div className="container">
          <input type="text" value={this.state.input}
            onChange={this.changeinput}/>
            <button onClick={this.add} style={{backgroundColor:"green"}}>Add</button>
            </div>
            <ul>
              {this.state.tasks.map((task,index)=>(
                <li key={index}>
                  {task}
                  <button onClick={()=>this.deletetask(index)}>❌</button>
                </li>
              ))}
            </ul>
        </div>
      );
    }
}
export default Dothis;