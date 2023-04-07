import React from "react"
import { useEffect, useState } from "react"


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
    async function sendPage(page: any) {
        const URL = `http://localhost:8181/movies/list?page=${page}`
        const FETCHED_DATA = await fetch(URL);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setMovies(FETCHED_JSON)
    }

    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        sendPage(value);
        setPage(value)
    }
    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <div className="flex mx-auto flex-wrap justify-between">
            {movies.map((movies, index) =>
                <div style={{ width: '250px' }} key="index">
                    <div className="border border-red-400">

                        <img src={!movies.poster ? "no-image.png" : movies.poster} alt={movies.title} className="max-w-lg" style={{ width: '80%', height: '300px', objectFit: 'contain' }} />
                    </div>
                    <div className="flex items-center">
                        <img src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg" alt="" style={{
                            width: "16px",
                            height: "16px"
                        }} />
                        <p>{movies.tomatoes?.viewer?.meter ? movies.tomatoes?.viewer?.meter : 0}%</p>
                    </div>
                    <h3>{movies.title}</h3>
                </div>
            )}
            <div className="mx-60 m-5 rounded-md">
                {/* <Stack spacing={2} alignItems="center" > */}

                {/* <Pagination count={15} page={page} onChange={handleChange} /> */}
                {/* </Stack> */}
            </div>
        </div>
    )
}