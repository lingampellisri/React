import { useState } from 'react'
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
//function App() {//props using function
//   const [count, setCount] = useState(0)
//   const products = [
//     { id: 1, name: "Laptop", price: 55000 },
//     { id: 2, name: "Mobile", price: 25000 },
//     { id: 3, name: "Headphones", price: 3000 },
//   ];
// return (
//    <>
//       <Hello/>             //sample
//        <Counter/>         //function usestate
//        <Classcounter/>  //class state
//         <Dothis/>       //TO-DO LIST
//         <div>
//           <h1>Online Store</h1>
//           {products.map((p)=>(           
//              <Child key={p.id}
//             name={p.name}
//             price={p.price}
//            />          ))}
//         </div>
//     </>
//   )
// }

// export default App


//props using class
function App() {
  return (
      <Application/>
  )
}
export default App;