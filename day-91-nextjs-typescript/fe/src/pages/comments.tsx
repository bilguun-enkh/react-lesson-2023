import { useEffect, useState } from "react"


interface IComments {
    name: string,
    email: string,
    movie_id: number,
    text: string,
    date: Date
}

export default function Comments(): JSX.Element {
    const [comments, setComments] = useState<IComments[]>([])
    async function fetchComments(): Promise<void> {
        const FETCHED_DATA = await fetch("http://localhost:8080/comments/list")
        const FETCHED_JSON = await FETCHED_DATA.json()
        setComments(FETCHED_JSON)
        console.log(FETCHED_JSON)
    }
    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <div>
            {comments.map((comments, index) =>
                <p key={index}>
                    {comments.name}
                </p>
            )}
        </div>

    )
}