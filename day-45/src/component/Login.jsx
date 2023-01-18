import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        loginName: "123@gmail.com",
        password: "okay",
    })
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.username.value)
        console.log(e.target.password.value)
        if (
            user.loginName === e.target.username.value &&
            user.password === e.target.password.value
        ) {
            toast("User is permitted")
            navigate("/", { replace: true, state: { bookName: "Fake Title" } })
        } else {
            toast("User is not permitted.")
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Login Name: </label>
                <input name="username" type="email" />
                <br />
                <label htmlFor="password">Password: </label>
                <input name="password" type="password" />
                <br />
                <button> Sign In</button>
                <Link to={"/home"}>Back</Link>
            </form>
            <ToastContainer />
        </div>
    )
}
