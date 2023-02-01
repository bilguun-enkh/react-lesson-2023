import UsersBreadCrumbs from "../components/UsersBreadCrumbs";
import UsersTable from "../components/UsersTable";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


export default function Users() {
    return (
        <div>
            <UsersBreadCrumbs />
            <Typography variant="h4" style={{ marginLeft: '250px', width: '100px', marginTop: '50px' }}>Users</Typography>
            <Link to={'/newuser'} style={{ textDecoration: 'none' }} >
                <Button variant="contained" style={{ marginBottom: '50px', marginLeft: '0' }}>New</Button>
            </Link>
            <UsersTable />
        </div >
    )
}