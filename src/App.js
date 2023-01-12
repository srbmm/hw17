import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
const [counter, setCounter] = useState(0);
  return (
    <div className="container">
        <div className="app">
            <button className="minus" onClick={() => setCounter(counter-1)}>-</button>
            <div className="">{counter}</div>
            <button className="plus" onClick={() => setCounter(counter+1)}>+</button>
        </div>
    </div>
  );
}

export default App;
