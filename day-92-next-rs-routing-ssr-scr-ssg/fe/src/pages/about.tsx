import React from "react"


export function getStaticProps() {
    return {
        props: {
            theater: "test",
        },
        revalidate: 600,
    }
}


function About(props: any): JSX.Element {
    return (
        <div>
            <h1>
                Im an about page!
            </h1>

            <p>Theater Name: {props.theater}</p>
        </div>
    )
}
export default About