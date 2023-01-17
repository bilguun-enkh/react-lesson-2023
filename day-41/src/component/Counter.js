import { useState } from "react"

function Counter() {
    const [number, idk, ] = useState(0)
    return (
        <div>
            <h1>{number}</h1>
            <button
                onClick={() => {
                    idk(n => n + 1)
                    idk(n => n + 1)
                    idk(n => n + 1)
                }}>Click</button>
        </div>
    )
}
export default Counter