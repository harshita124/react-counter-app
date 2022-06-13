import './App.css';
import { useState } from 'react';

function App() {
  const [counterNumber, setCounterNumber] = useState(0);
  return (
    <div className="App">
      <h1>Counter App</h1>
    <button id="increment-btn" onClick={()=>{
      setCounterNumber(counterNumber+1);
      console.log(counterNumber);
    }}>Increment</button>
     <button id="decrement-btn" onClick={()=>{
      setCounterNumber(counterNumber-1);
      console.log(counterNumber);
    }}>Decrement</button>
    <div>{counterNumber}</div>  
    </div>
  );
}

export default App;
