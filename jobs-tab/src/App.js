import React from "react"
import './App.css';
import { AiFillCaretRight } from "react-icons/ai"
import { useState } from 'react'
import { useEffect } from 'react'
import { employeeData } from "./data";
function App() {
  const [data, setData] = useState()

  const url = "https://course-api.com/react-tabs-project";
  async function callURL() {
    const FETCHED_URL = await fetch(url)
    const FETCHED_JSON = await FETCHED_URL.json()
    setData(FETCHED_JSON)
  }
  useEffect(() => {
    callURL()
  }, [])

  setData(employeeData)

  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          <h4>John</h4>
          <h4>Smith</h4>
          <h4>Tom</h4>
        </div>
        {data && data.map((data, index) => {
          return (
            <div className="company-content" key={index}>
              <h2 className="job-title">{data.title}</h2>
              <p className="company-name">{data.company}</p>
              <p className="date">{data.dates}</p>
              <div className="text">
                <AiFillCaretRight />
                <p>{data.duties[0]}</p>
              </div>
              <div className="text">
                <AiFillCaretRight />
                <p>{data.duties[1]}</p>
              </div>
              <div className="text">
                <AiFillCaretRight />
                <p>{data.duties[2]}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default App;
