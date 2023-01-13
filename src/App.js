import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
const [counter, setCounter] = useState(0);
  return (
    <div className="container">
        <h1>Hello react!</h1>
        <div className="app">
            <button className="minus" onClick={() => setCounter(counter > 0 ? counter-1:counter)}>-</button>
            <div className="">{counter}</div>
            <button className="plus" onClick={() => setCounter(counter+1)}>+</button>
        </div>
    </div>
  );
}

export default App;
