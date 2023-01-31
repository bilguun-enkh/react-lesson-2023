import './App.css';
import { Routes, Route } from 'react-router-dom'
import Users from './pages/Users';
import SideBar from './components/SideBar';
import Products from './pages/Products';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/Products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
