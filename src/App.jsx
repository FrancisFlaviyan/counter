import { useState,useEffect} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{console.log("it changed")},[count])
  
 

  return (
        <div className="App">
      <div>
        say hi
        count: {count}
      </div>
       <button onClick={()=>{setCount(count+1)}}>+1</button>
       <button onClick={()=>{setCount(count-1)}}>-1</button>
    </div>
  )
}

export default App
