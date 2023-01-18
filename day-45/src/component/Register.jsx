import { useState } from "react"
import { Link, Navigate } from "react-router-dom"

export default function Register() {
    const [formSubmitted, setFormSubmitted] = useState(false)

    if (formSubmitted) {
        return <Navigate to={"/login"} />
    }

    // const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
        // navigate("/login", { replace: true, state: { bookName: "Fake Title" } })
    }
    return (
        <div className="register-div">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Register Name: </label>
                    <input name="username" type="text" />
                </div>
                <div>
                    <label htmlFor="username">Email: </label>
                    <input name="username" type="email" />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>

                    <input name="password" type="password" />
                </div>
                <div>
                    <label htmlFor="password">Phone Number: </label>
                    <input name="password" type="number" />
                </div>
                <button> Sign In</button>
                <Link to={"/home"}>Back</Link>
            </form>
        </div>
    )
}
