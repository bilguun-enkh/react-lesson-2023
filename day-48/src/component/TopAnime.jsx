import { useEffect } from "react"
import { useState } from "react"

export default function TopAnime() {
    const [animes, setAnimes] = useState([])
    const [page, setPage] = useState(1)
    const URL = `https://api.jikan.moe/v4/top/anime?page=${page}`
    useEffect(() => {
        callData()
    }, [page])

    async function callData() {
        const JSONdata = await fetch(URL)
        const RESULTData = await JSONdata.json()
        setAnimes(RESULTData.data)
        console.log(animes)
    }

    return (
        <div>
            <button onClick={() => setPage(page + 1)}>Next page</button>
            {animes && animes.map((anime, index) => {
                return <h6 key={index}>{anime.title}</h6>
            })}
            < button onClick={callData} > Fetch Top Anime</button >

        </div >
    )
}