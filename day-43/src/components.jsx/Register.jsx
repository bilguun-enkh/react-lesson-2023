export default function Register() {
    return (
        <div>
            <h1>Register page</h1>
            <form>
                <label for='email'>Email</label>
                <input type='email'></input>
                <br />
                <label for='firstname'>First name: </label>
                <input type='text' name='firstname'></input>
                <br />
                <label for='lastname'>Last name: </label>
                <input type='text' name='lastname'></input>
                <br />
                <label for='password'>Password: </label>
                <input type='password' name='password'></input>
                <br />
                <label for='password'>Confirm Password: </label>
                <input type='password' name='password'></input>
                <br />
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}