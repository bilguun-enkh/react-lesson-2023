import React from "react";
import { useRouter } from "next/router"

export async function getServerSideProps(request: any) {
    const { date, slug } = request.params
    return {
        props: {
            date,
            slug
        }
    }
}

export default function Greeting(props: any): JSX.Element {


    return (
        <div>
            <h1>Hello {props.slug} </h1>
            <h1>Today is {props.date} </h1>
        </div>
    )
}