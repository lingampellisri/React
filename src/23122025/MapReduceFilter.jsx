import React from "react";
function MapReduceFilter(){
  const prod=[
     { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];
  const promap=prod.map(p=>p.name);//Transform very element to new array and returns new array 
   const profilter=prod.filter(p=>p.price>20000);//selects elements based on condition and return subset of array
   const proreduce=prod.reduce((acc,p)=>acc+p.price,0);//reduces array to single value
   return(
    <div>
      <h2> Map Products</h2>
      <ul>
        {promap.map((name,i)=>(
          <li key={i}>{name}</li>
        ))}
      </ul>
      <h2> Filter Products</h2>
      <ul>
        {profilter.map(p=>(
          <li key={p.id}>{p.name} - {p.price}</li>
        ))}
      </ul>
      <h2> Reduce Products</h2>
      <p>{proreduce}</p>
    </div>
   )
}
export default MapReduceFilter;