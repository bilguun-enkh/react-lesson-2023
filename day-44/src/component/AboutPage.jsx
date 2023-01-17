import { Link, useLocation } from 'react-router-dom'

export default function AboutPage() {
    const location = useLocation()
    const state = location.state;

    return (
        <div>
            <h1>About page</h1>
            <h1>{state.message}</h1>
            <p>{state.timestamp}</p>
            <Link to={'/'}>Back</Link>
        </div>
    )
}