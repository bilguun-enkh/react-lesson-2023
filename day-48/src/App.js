import Input from './component/Input';
import './App.css';
import { useState } from "react"
import Anime from './component/Anime';
import Button from './component/Button';
import TopAnime from './component/TopAnime';


function App() {
  const [text, setText] = useState('')
  let labelText1 = 'first input'
  let labelText2 = 'second input'
  function handleChange(event) {
    setText(event.target.value)
  }
  return (
    <div className="App">
      <h1>Day - 48 - UseEffects </h1>
      {/* <Input labelText={labelText1} handleChange={handleChange} text={text} />
      <Input labelText={labelText2} handleChange={handleChange} text={text} />
      <Anime />
      <Button /> */}
      <TopAnime />
    </div>
  );
}

export default App;
