import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Login from './component/Login';
import Accordion from './component/Accordion';
import Home from './component/Home';
import Register from './component/Register';
import { useState } from 'react'
function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="App">
      <div className='header'>
        <Link to={'/'} className={activeIndex === 0 ? 'active' : ""}
          onClick={() => setActiveIndex(0)}>Home</Link>
        <Link to={'/login'} className={activeIndex === 1 ? 'active' : ""}
          onClick={() => setActiveIndex(1)}>Login</Link>
        <Link to={'/register'} className={activeIndex === 2 ? 'active' : ""}
          onClick={() => setActiveIndex(2)}>Register</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={'login'} element={<Login />} />
        <Route path={'register'} element={<Register />} />
        <Route path={'accordion'} element={<Accordion />} />
        <Route path={'home'} element={<Home />} />

      </Routes>
    </div >
  );
}

export default App;
