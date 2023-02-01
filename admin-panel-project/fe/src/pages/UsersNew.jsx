import UsersBreadCrumbs from "../components/UsersBreadCrumbs";
import UsersTable from "../components/UsersTable";
import { TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";


export default function UsersNew() {
    return (
        <div >
            <UsersBreadCrumbs />
            <Link to={'/Users'} style={{ textDecoration: 'none' }}>
                <Button variant="contained" style={{ marginBottom: '50px', marginLeft: '0', }}>Back</Button>
            </Link>
            <Box
                component={'div'}
                margin={'auto'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 1500,
                    height: 800,
                    backgroundColor: '#f5f5f5',
                    borderRadius: '10px',
                    padding: '10px',
                    marginTop: '20px'
                }}
            >
                <Typography variant="h4" style={{ marginLeft: '0px', width: '200px', paddingTop: '20px' }}>Add Users</Typography>
                <TextField margin="dense" placeholder="First Name" type='text' name='firstName'></TextField>
                <TextField margin="dense" placeholder="Last Name" type='text' name='lastName'></TextField>
                <TextField margin="dense" placeholder="Email Name" type='email' name='email'></TextField>
                <TextField margin="dense" placeholder="Phone Number" type='number' name='phoneNumber'></TextField>
                <TextField margin="dense" placeholder="Age" type='number' name='age'></TextField>
                <TextField margin="dense" placeholder="Gender" type='text' name='gender'></TextField>
                <TextField margin="dense" placeholder="Password" type='password' name='password'></TextField>
                <TextField margin="dense" placeholder="Address" type='text' name='address'></TextField>
                <div style={{ marginTop: '50px', display: 'flex', width: '300px', justifyContent: 'space-between' }}>
                    <Button variant="contained" color="success">Save</Button> <Button variant="contained" color="info">Reset</Button> <Button variant="contained" color="error">Cancel</Button>
                </div>
            </Box>
        </div>
    )
}