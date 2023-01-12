import './App.css';
import { useState } from "react"
import Counter from './component/Counter';

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }
  const [inputText, setInputText] = useState("")
  function handleInput(event) {
    setInputText(event.target.value)
  }
  return (
    <div className="App">
      <h1>Day - 41 - React States</h1>
      <p>{count}</p>
      <button onClick={handleClick}>Button</button>
      <br />
      <input onChange={(e) => (handleInput(e))}></input>
      <p>{inputText}</p>

      <Counter />
    </div>
  );
}

export default App;
