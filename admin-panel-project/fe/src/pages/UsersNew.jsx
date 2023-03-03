import * as React from 'react';
import { TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import AddUsersBreadCrumbs from "../components/NewUsersCrumbs";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import Select from '@mui/material/Select';
import { useEffect } from 'react';


export default function UsersNew() {

    const URL = 'http://localhost:8080/users'
    const [currentUser, setCurrentUser] = useState()
    const [users, setUsers] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()
        const postData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNumber.value,
            age: e.target.age.value,
            gender: e.target.gender.value,
            password: e.target.password.value,
            address: e.target.address.value,
            userRole: e.target.userRole.value,
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setCurrentUser(FETCHED_JSON.data)
    }
    async function fetchUsers() {
        const FETCHED_DATA = await fetch(URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setUsers(FETCHED_JSON.data)
        console.log(FETCHED_JSON)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div >
            <AddUsersBreadCrumbs />
            <Link to={'/Users'} style={{ textDecoration: 'none' }}>
                <Button variant="contained" sx={{ marginBottom: '50px', marginLeft: '0', }}>Back</Button>
            </Link>
            <Box
                component={'div'}
                margin={'auto'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 1550,
                    height: 800,
                    backgroundColor: '#f5f5f5',
                    borderRadius: '10px',
                    padding: '10px',
                    marginTop: '20px'
                }}
            >
                <Typography variant="h4" style={{ marginLeft: '0px', width: '200px', paddingTop: '20px' }}>Add Users</Typography>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 1500,
                    height: 800,
                    backgroundColor: '#f5f5f5',
                    borderRadius: '10px',
                    padding: '10px',
                    marginTop: '20px'
                }}
                    onSubmit={handleSubmit}>
                    <TextField margin="dense" placeholder="First Name" type='text' name='firstName'></TextField>
                    <TextField margin="dense" placeholder="Last Name" type='text' name='lastName'></TextField>
                    <TextField margin="dense" placeholder="Email" type='email' name='email'></TextField>
                    <TextField margin="dense" placeholder="Phone Number" type='number' name='phoneNumber'></TextField>
                    <TextField margin="dense" placeholder="Age" type='number' name='age'></TextField>
                    <TextField margin="dense" placeholder="Gender" type='text' name='gender'></TextField>
                    <TextField margin="dense" placeholder="Password" type='password' name='password'></TextField>
                    <TextField margin="dense" placeholder="Address" type='text' name='address'></TextField>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">User Role</InputLabel>
                        <Select
                            name='userRole'
                        >
                            <MenuItem value='Admin'>Admin</MenuItem>
                            <MenuItem value='Customer'>Customer</MenuItem>
                        </Select>
                    </FormControl>

                    <div style={{ marginTop: '50px', display: 'flex', width: '300px', justifyContent: 'space-between' }}>
                        <Button variant="contained" color="success" type='submit'>Save</Button> <Button variant="contained" color="info">Reset</Button> <Button variant="contained" color="error">Cancel</Button>
                    </div>
                </form>
            </Box>
            {users && users.map((user, index) => {
                return (
                    <div key={index}>
                        {user.firstname}
                        {user.lastname}
                        {user.email}
                        {user.address}
                        {user.role.name}
                    </div>
                )
            })}
        </div >
    )
}