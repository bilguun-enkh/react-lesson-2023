export default function Login() {
    return (
        <div>
            <h1>Login page</h1>
            <form>
                <label htmlFor='email'>Email</label>
                <input type='email'></input>
                <br />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password'></input>
                <br />
                <button>Login in</button>
            </form>
        </div>
    )
}