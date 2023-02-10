import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
 

  return (
    <div className="App">
      <div>
        count: {count}
      </div>
       <button onClick={()=>{setCount(count+1)}}>+1</button>
       <button onClick={()=>{setCount(count-1)}}>-1</button>
    </div>
  )
}

export default App