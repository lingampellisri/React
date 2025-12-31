import { useState,useMemo } from "react";
function Products(){
     const [search,setsearch]=useState("");
    const [count,setcount]=useState(0);
    const products=[
      { name: "Laptop" },
    { name: "Mobile" },
    { name: "Headphones" },
    { name: "Keyboard" },
    ]
    const filpro=useMemo(()=>
    {
      console.log("Filtering Products");
      return products.filter(p=>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    },[search,products]);
    return(
      <>
      <input placeholder="search" onChange={(e)=>setsearch(e.target.value)}/>
      <button onClick={()=>setcount(count+1)}>Re-render</button>
      <ul>
        {filpro.map((p,i)=>
        (
          <li key={i}>{p.name}</li>
        ))}
      </ul>
      </>
    )
}
export default Products;