
import { useState } from 'react'


export default function Home() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  function Add() {
    setResult(num1 + num2)
  }

  function Subtract() {
    let temp = num1 - num2
    setResult(temp)
  }

  function Multipy() {
    let temp = num1 * num2
    setResult(temp)
  }
  function Divide() {
    let temp = num1 / num2
    setResult(temp)
  }
  return (
    <div className='container' >
      <p className='result' data-testid="result">
        {result}
      </p>
      <input onChange={(e: any) => { setNum1(Number(e.target.value)) }} type="number" data-testid="num1" />
      <input onChange={(e: any) => { setNum2(Number(e.target.value)) }} type="number" data-testid="num2" />
      <button onClick={Add} data-testid="add" >Add</button>
      <button onClick={Subtract} data-testid="subtract">Subtract</button>
      <button onClick={Multipy} data-testid="multiply">Multipy</button>
      <button onClick={Divide} data-testid="divide">Divide</button>
    </div>
  )
}
