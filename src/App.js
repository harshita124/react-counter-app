import './App.css';

import Button from './components/button/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import actions from './actions';

function App() {
 // const [counterNumber, setCounterNumber] = useState(0);
 const dispatch = useDispatch();
 const count = useSelector((state)=>state.count);

 
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Button buttonText="Increment" onclick={()=>dispatch(actions.increment)}/>
      <Button buttonText="Decrement" onclick={()=>dispatch(actions.decerement)}/>
    <div>{count}</div>
    </div>
  );
}

export default App;
