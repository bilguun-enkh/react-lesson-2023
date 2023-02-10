import { useContext } from "react"
import { PlaceContext } from "../context/PlaceContext"
import { places } from "../data/data"
import Place from "./Place"

export default function List() {
    const [isLarge, setIsLarge, imageSize] = useContext(PlaceContext)
    return (
        <div>
            {places.map((place, index) => {
                return <Place key={index} place={place} />
            })}
        </div>

    )
}