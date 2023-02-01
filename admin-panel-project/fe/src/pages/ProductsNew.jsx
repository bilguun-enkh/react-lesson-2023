import UsersBreadCrumbs from "../components/UsersBreadCrumbs";
import { TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import ProjectBreadCrumbs from "../components/ProjectBreadCrumbs";

export default function ProductsNew() {
    return (
        <div >
            <ProjectBreadCrumbs />
            <Link to={'/Products'} style={{ textDecoration: 'none' }}>
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
                <Typography variant="h4" style={{ marginLeft: '0px', width: '200px', paddingTop: '20px' }}>Add Product</Typography>

            </Box >
        </div >
    )
}