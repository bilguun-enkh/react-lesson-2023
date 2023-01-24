import { useState } from "react"
import Counter from "./Counter"
export default function Fancy() {
    const [isFancy, setIsFancy] = useState(false)
    const [fancyClass, setFancyClass] = useState('counter')

    function changeFancy(e) {
        if (isFancy) {
            setIsFancy(!isFancy)
            setFancyClass('counter')
        } else {
            setIsFancy(!isFancy)
            setFancyClass('counter fancy')
        }
    }

    return (
        <div className='body-div'>
            <Counter isFancy={isFancy} fancyClass={fancyClass} />
            <form>
                <label>
                    <input
                        name="isGoing"
                        type="checkbox"
                        onChange={(e) => (changeFancy(e))}
                    />
                    Use Fancy styling
                </label>
            </form>
        </div>
    );
}