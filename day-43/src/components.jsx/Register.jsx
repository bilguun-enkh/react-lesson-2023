export default function Register() {
    return (
        <div>
            <h1>Register page</h1>
            <form>
                <label htmlFor='email'>Email</label>
                <input type='email'></input>
                <br />
                <label htmlFor='firstname'>First name: </label>
                <input type='text' name='firstname'></input>
                <br />
                <label htmlFor='lastname'>Last name: </label>
                <input type='text' name='lastname'></input>
                <br />
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password'></input>
                <br />
                <label htmlFor='password'>Confirm Password: </label>
                <input type='password' name='password'></input>
                <br />
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}