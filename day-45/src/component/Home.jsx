import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <h1>Day 35 Home Page</h1>
            <nav>
                <Link to={"/"}>Home</Link>
                <br />
                <Link to={"/login"}>Login</Link>
                <br />
                <Link to={"/register"}>Register</Link>
            </nav>
        </div>
    )
}
