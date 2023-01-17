import './App.css';
import About from './components.jsx/About';
import FeedbackForm from './components.jsx/FeedbackForm';
import Login from './components.jsx/Login';
import Register from './components.jsx/Register';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components.jsx/Home';
import Test from './components.jsx/Test';
import Usukhuu from './components.jsx/About/Usukhuu';
import Khangai from './components.jsx/About/Khangai';
import NotFound from './components.jsx/NotFound';

function App() {
  return (
    <div className='App'>
      <h1>Day - 43 - React routers</h1>
      <div id='navbar'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/about/test'}>About test</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
        <Link to={'/feedbackform'}>Feedback</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/*' element={<About />} >
          <Route path='usukhuu' element={<Usukhuu />} />
          <Route path='khangai ' element={<Khangai />} />
          <Route path='test' element={<Test />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/feedbackform' element={<FeedbackForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App;