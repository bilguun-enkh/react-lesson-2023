import { useState } from "react"
import movieData from '../data/books'
import { Link } from 'react-router-dom'
export default function Movies() {

    const [movies, setMovies] = useState(movieData)
    return (
        <div>
            <h1>Movies</h1>
            {movieData.map((data, index) => {
                return (
                    <Link key={index} to={`/movie/${data.id}`} state={data}>
                        <p key={index}>{data.name}</p>
                    </Link>
                )
            })}
            <Link to={'/'}>Back</Link>

        </div>
    )
}