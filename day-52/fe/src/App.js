import './App.css';
import { useEffect, useState } from 'react'
// import { } from './services/userServices'
import { fetchAllData, deleteUser, updateUser, createUser } from './services/axiosUsersService';

function App() {

  const URL = 'http://localhost:8080/users'
  const newUser = {
    id: '',
    age: '',
    username: '',
  }

  const [users, setUsers] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [currentUser, setCurrentUser] = useState(newUser)

  useEffect(() => {
    fetchAllData(URL, setUsers)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!isUpdate) {
      createUser(currentUser, URL, setUsers, setIsUpdate, setCurrentUser, newUser)
    } else {
      updateUser(e, URL, setUsers)
    }
  }

  async function handleDelete(userId) {
    deleteUser(userId, URL, setUsers)
  }

  async function handleEdit(userId) {
    setIsUpdate(true)
    const filteredUser = users.filter(user => user.id === userId)[0]

    if (filteredUser) {
      setCurrentUser({
        id: filteredUser.id,
        age: filteredUser.age,
        username: filteredUser.username,
      })
    }
  }

  function handleUserName(e) {
    setCurrentUser({
      ...currentUser,
      username: e.target.value
    })
  }
  function handleUserAge(e) {
    setCurrentUser({
      ...currentUser,
      age: e.target.value
    })
  }


  return (
    <div className="App">
      <h1> Day - 52 - NodeJS FS Module</h1>
      <h3>Create User Form</h3>
      <form className='form-div' onSubmit={handleSubmit}>
        <label>
          Username:
          <input name='username' value={currentUser.username} onChange={(e) => handleUserName(e)} />
        </label>
        <br />
        <label>
          Age:
          <input name='age' value={currentUser.age} onChange={handleUserAge} />
        </label>
        <br />
        <button>{isUpdate ? 'Update' : "Submit"}</button>
      </form>
      <h3>Users List</h3>
      {
        users && users.map((user, index) => {
          return (
            <div key={index}>
              <p>{user.username} : {user.age} <button onClick={() => handleDelete(user.id)}>Delete</button>
                <button onClick={() => handleEdit(user.id)}>Edit</button> </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;
