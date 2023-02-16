import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import CategoryForm from './components/CategoryForm';
import Categories from './components/Categories';
import { ToastContainer } from 'react-toastify'
import CategoryEditForm from './components/CategoryEditForm';


function App() {
  return (
    <div className="App">
      <h1>Day - 63 - Category CRUD</h1>
      <Link to='/'>Root</Link>
      <br />
      <Link to='category/add'>Add</Link>
      <br />
      <Link to='category/list'>List</Link>
      <br />
      <Routes>
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path="/category/list" element={<Categories />} />
        <Route path="/category/edit/:id" element={<CategoryEditForm />} />
        <Route path="/category/delete/:id" element={null} />
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
