import './App.css';
import UserRegisterForm from './components/UserRegisterForm';
import { Routes, Route, Link } from 'react-router-dom'
import Users from './components/Users';
import LoginForm from './components/LoginForm';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
      <h1> Day - 62 - USER CRUD ADMIN</h1>
      <h5>User Register Form</h5>

      <Link to='login'>Login</Link>
      <br />
      <Link to='register'>Register</Link>
      <br />
      <Link to='users'>Users</Link>
      <Routes>
        <Route path='/register' element={<UserRegisterForm />} />
        <Route path='/users' element={<Users />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
