import React from "react";
import axios from 'axios'


export default function Movies({ data }: { data: any }): JSX.Element {
    return (
        <div>
            <img src={data.poster} />
            {data.title} <br></br>
            {data.imdb.rating}
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const { id } = context.params
    const res = await axios(`http://localhost:8080/movies/byId/${id}`)
    const data = await res.data

    return {
        props: { data }
    }

}