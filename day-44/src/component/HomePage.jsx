import {Link, useLocation} from 'react-router-dom'

export default function HomePage() {
    const location = useLocation()
    const state = location.state;

    return (
        <div>
            <h1>Home page</h1>
            <p>{state.timestamp}</p>
            <Link to={'/'}>Back</Link>
        </div>
    )
}