import { useEffect } from "react"
import { useState } from "react"

export default function Register() {
    const initialFormData = Object.freeze({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
        userrole: 0,
        address: "",
    })
    const [roles, setRoles] = useState([])
    const [formData, setFormData] = useState(initialFormData)

    useEffect(() => {
        fetchRoles()
    }, [formData])

    const ROLE_URL = 'http://localhost:8080/admin/role/list'
    const REGISTER_URL = 'http://localhost:8080/admin/register'


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
        console.log(formData)
    }

    const fetchRoles = async () => {
        const FETCHED_DATA = await fetch(ROLE_URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setRoles(FETCHED_JSON.data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        const FETCHED_DATA = await fetch(REGISTER_URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON)
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="form-div">
                <label className="label-container">
                    First Name:
                    <input name="firstname" type="text" onChange={handleChange} />
                </label>
                <label className="label-container">
                    Last Name:
                    <input name="lastname" type="text" onChange={handleChange} />
                </label>
                <label className="label-container">
                    Email:
                    <input name="email" type="email" onChange={handleChange} />
                </label>
                <label className="label-container">
                    Password:
                    <input name="password" type="password" onChange={handleChange} />
                </label>
                <label className="label-container">
                    Number:
                    <input name="phone" type="number" onChange={handleChange} />
                </label>
                <label className="label-container">
                    Roles:
                    <select name="userrole" onChange={handleChange}>{roles && roles.map((role, index) => <option key={index} id={role._id} value={role._id} >{role.name}</option>)}</select>
                </label>
                <label className="label-container">
                    Address:
                    <textarea name='address' onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}