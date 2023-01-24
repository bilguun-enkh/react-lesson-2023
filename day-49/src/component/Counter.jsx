import { useState } from "react"

export default function Counter({ isFancy, fancyClass }) {
    const [count, setCounter] = useState(0)
    function changeBackground(e) {
        e.target.style.background = ' #ffffd8';
    }
    function changeBack(e) {
        e.target.style.background = 'white'
    }
    return (
        <div>
            <div className={fancyClass} onMouseEnter={changeBackground} onMouseLeave={changeBack}>
                <h1>{count}</h1 >
                <button onClick={() => {
                    setCounter(count + 1)
                }}>Add one</button>
            </div >
        </div>
    )
}