import { useEffect, useState } from "react"

interface IGeo {
    type: {
        type: string,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [number, number],
        required: true
    }
}

interface IAddress {
    street1: string,
    city: string,
    state: string,
    zipcode: string
}

interface ILocation {
    address: IAddress,
    geo: IGeo,
}

interface ITheater {
    theaterId: number,
    location: ILocation
}

const number: number = 1003
export default function Theaters(): JSX.Element {
    const [state, setState] = useState<ITheater[]>([])
    async function fetchData(): Promise<void> {
        const FETCHED_DATA = await fetch(`http://localhost:8080/theaters/byId/${number}`)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setState(FETCHED_JSON)
        console.log(state)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            {state.map((state, index) =>
                <div key={index} >
                    <p>{state.theaterId}</p>
                    <p>{state.location.address.street1}</p>
                    <p>{state.location.address.state}</p>
                </div>
            )}
        </div>
    )
}