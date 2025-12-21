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
function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      {/* <Hello/> 
        <Welcome/>
       <Welcome/>
       <Counter/>
       <Classcounter/>
       <Greeting/> */}
       
       <Dothis/>

    </>
  )
}

export default App


