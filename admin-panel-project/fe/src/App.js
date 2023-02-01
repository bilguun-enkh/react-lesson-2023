import './App.css';
import { Routes, Route } from 'react-router-dom'
import Users from './pages/Users';
import SideBar from './components/SideBar';
import Products from './pages/Products';
import Home from './pages/Home';
import Header from './components/Header';
import UsersNew from './pages/UsersNew'
import { Link } from 'react-router-dom';
import ProductsNew from './pages/ProductsNew';


function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Routes>
        <Route path='/' />
        <Route path='/Home' element={<Home />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/newuser' element={<UsersNew />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/ProductsNew' element={<ProductsNew />} />
      </Routes>

    </div>
  );
}

export default App;
