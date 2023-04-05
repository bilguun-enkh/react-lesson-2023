import { useEffect, useState } from "react"
import styles from '@/styles/Home.module.css'

interface IViewer {
    rating: number,
    numReview: number,
    meter: number
}

interface IAwards {
    wins: number,
    nominations: number,
    text: string,
}
interface IImdb {
    rating: number,
    votes: number,
    id: number
}
interface ITomatoes {
    viewer: IViewer,
    lastUpdated: Date
}
interface IMovie {
    plot: string,
    genre: {
        type: [string]
    },
    runtime: number,
    rated: string,
    cast: {
        type: [string]
    },
    num_mflix_comments: number,
    poster: string,
    title: string,
    fullplot: string,
    languages: {
        type: [string]
    },
    released: Date,
    directors: [
        type: [string]
    ],
    writers: [
        type: [string]
    ],
    awards: IAwards,
    lastupdated: Date,
    year: number,
    imdb: IImdb,
    countries: {
        type: [string]
    },
    type: string,
    tomatoes: ITomatoes
}


export default function Movies(): JSX.Element {
    const [movies, setMovies] = useState<IMovie[]>([])
    async function fetchMovies(): Promise<void> {
        const FETCHED_DATA = await fetch(`http://localhost:8080/movies/list`)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setMovies(FETCHED_JSON)
    }
    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <div className={styles.moviesDiv}>
            {movies.map((movies, index) =>
                <div className={styles.moviesDiv}>
                    <h4>{movies.title}</h4>
                    <img src={movies.poster} alt="" />
                </div>
            )}
        </div>
    )
}