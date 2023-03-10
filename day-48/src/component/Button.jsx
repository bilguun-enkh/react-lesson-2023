import { useEffect } from "react"
import { useState } from "react"

export default function Button() {
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) {
            console.log("It is playing")
        } else {
            console.log("It is not playing")
        }
    }, [isPlaying])

    function handleClick() {
        console.log("You clicked me!")
        setIsPlaying(!isPlaying)
    }
    return (
        <div>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    )
}