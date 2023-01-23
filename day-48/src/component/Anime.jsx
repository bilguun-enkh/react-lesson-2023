import { useState } from "react"
import { useEffect } from "react"

export default function Anime() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('My Anime Component')
        setCount(count + 1)
    }, [])
    console.log(count)
    function handleClick(e) {
        console.log(e)
    }
    return (
        <div>
            <h1>
                Day 48 - useEffect with anime
            </h1>
            <button onClick={(e) => {
                handleClick(e)
                setCount(count + 1)
            }}>
                Anime Click
            </button>
        </div>
    )
}