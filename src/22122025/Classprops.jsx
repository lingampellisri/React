import React from 'react';//props using class
//import Child from './22122025/pro';
import Child from './pro';
class Application extends React.Component{
  constructor(props){
    super(props);
    this.state={
        products:[
   { id: 1, name: "Laptop", price: 55000 },
   { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 },
   ]
    };
  }
  render(){
    return (
     <>
        <div>
          <h1>Online Store</h1>
          {this.state.products.map((p)=>(           
             <Child key={p.id}
            name={p.name}
            price={p.price}
           />          ))}
        </div>
    </>
  );
}
}
export default Application;




