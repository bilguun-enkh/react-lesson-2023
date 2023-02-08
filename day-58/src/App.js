import { useContext } from 'react';
import './App.css';
import List from './components/List';
import StopWatch from './components/StopWatch';
import { PlaceContext, PlaceProvider } from './context/PlaceContext'

function App() {
  const [isLarge, setIsLarge, imageSize] = useContext(PlaceContext)
  return (
    <div className="App">
      <h1>Day - 58 - useRef Hook</h1>
      {/* <label>Use Large Images</label>
      <input type="checkbox" onChange={e => setIsLarge(e.target.checked)}></input>
      <hr />
      <PlaceProvider>
        <List imageSize={imageSize} />
      </PlaceProvider> 
      <StopWatch /> */}
    </div>
  );
}

export default App;
