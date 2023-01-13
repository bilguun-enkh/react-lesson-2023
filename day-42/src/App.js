import './App.css';
import {useState} from 'react'


function App() {
  const [user, setUser] = useState([])
  function handleRegister(event) {
    event.preventDefault()
    console.log(event.target.firstname.value)
    console.log(event.target.lastname.value)

    const newUser = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      password: event.target.password.value,
    }

    setUser([...user, newUser])
  }
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <label>First-Name: </label>
        <input type="text" name='firstname'></input>
        <hr />
        <label>Last-Name: </label>
        <input type='text' name='lastname'></input>
        <hr />
        <label>Password: </label>
        <input type='password' name='password'></input>
        <hr />
        <label>Confirm Password: </label>
        <input type='password' name='password'></input>
        <hr />
        <button>Register</button>
      </form>

      <h2>Users Preview</h2>
      {user.map(u => {
        return (
          <div>
            <div>{u.firstname}</div>
            <div>{u.lastname}</div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
