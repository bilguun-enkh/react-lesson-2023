import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import InputForm from './component/InputForm';

const GET_DATA_URL = 'http://localhost:8080/data'
const DELETE_DATA_URL = 'http://localhost:8080/data'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function fetchData() {
    const FETCHED_DATA = await fetch(GET_DATA_URL)
    const JSON_FETCHED_DATA = await FETCHED_DATA.json()
    setData(JSON_FETCHED_DATA)
  }

  async function deleteData(data) {
    const options = {
      method: 'DELETE',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
    }
    const FETCHED_DATA = await fetch(DELETE_DATA_URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setData(FETCHED_JSON)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function handleDelete(id) {
    const data = {
      id: id
    }
    deleteData(data)
  }

  return (
    <div className="App">
      <h1>Day - 51 - React/Express FullStack APP - without Database</h1>
      <InputForm
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setData={setData} />
      {
        isLoading ? '...Loading' : (data && data.map((d, index) => {
          return (
            <div>
              <p key={index}> {d.name} - {d.major}</p>
              <button onClick={() => handleDelete(d.id)}>Delete</button>
            </div>
          )
        }
        ))}
    </div>
  );
}

export default App;