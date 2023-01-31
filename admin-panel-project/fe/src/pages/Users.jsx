import UsersBreadCrumbs from "../components/UsersBreadCrumbs";
import UsersTable from "../components/UsersTable";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';


export default function Users() {
    return (
        <div>
            <UsersBreadCrumbs />

            <Typography variant="h4" style={{ marginLeft: '250px', width: '100px', marginTop: '50px' }}>Users</Typography>
            <Button variant="contained">New</Button>
            <UsersTable />
        </div>
    )
}