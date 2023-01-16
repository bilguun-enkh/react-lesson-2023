export default function Login() {
    return (
        <div>
            <h1>Login page</h1>
            <form>
                <label for='email'>Email</label>
                <input type='email'></input>
                <br />
                <label for='password'>Password</label>
                <input type='password' name='password'></input>
                <br />
                <button>Login in</button>
            </form>
        </div>
    )
}