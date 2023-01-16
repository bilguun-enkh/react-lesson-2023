import './App.css';
import About from './components.jsx/About';
import FeedbackForm from './components.jsx/FeedbackForm';
import Login from './components.jsx/Login';
import Register from './components.jsx/Register';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <h1>Day - 43 - React routers</h1>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/feedbackform' element={<FeedbackForm />} />
      </Routes>
    </div>
  )
}
export default App;