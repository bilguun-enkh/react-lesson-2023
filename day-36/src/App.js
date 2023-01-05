import './App.css';
import { Button } from 'react-bootstrap'
import MainMenu from './components/MainMenu';

function App() {
  return (
    <div className="App">
      <div className='menu-container'>
      </div>
      <h1 className='bg-secondary'>React Bootstrap component</h1>
      <Button variant="primary" >Hello Bootstrap Button</Button>
        <MainMenu />
    </div>
  );
}

export default App;
