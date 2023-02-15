import { Button, FormLabel, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function LoginForm() {

    const URL = 'http://localhost:8080/login'
    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        const loginData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        if (FETCHED_JSON.status === 'Success') {
            toast.success('Login success!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate('/users')
        } else {
            toast.error('Login failed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        console.log(FETCHED_JSON)

    }
    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <FormLabel sx={{ marginRight: '15px  ' }}>
                    Username:
                </FormLabel>
                <Input placeholder="Enter username" type="email" name="email" />
                <br />
                <FormLabel sx={{ marginRight: '15px  ' }}>
                    Password:
                </FormLabel>
                <Input placeholder="Enter Password" type="password" name="password" />
                <br />
                <Button type='submit' variant="contained" sx={{ marginTop: '15px' }}>Submit </Button>
            </form>
        </div>
    )
}