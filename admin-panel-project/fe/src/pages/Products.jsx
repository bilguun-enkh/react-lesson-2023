import ProjectBreadCrumbs from "../components/ProjectBreadCrumbs";
import { Typography } from "@mui/material";
import ProductTable from "../components/ProductTable";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


export default function Products() {
    return (
        <div>
            <ProjectBreadCrumbs />
            <Typography variant="h4" style={{ marginLeft: '250px', width: '100px', marginTop: '50px' }}>Products</Typography>
            <Link to='/ProductsNew' style={{ textDecoration: 'none' }}>
                <Button variant="contained" color='success' style={{ marginBottom: '50px', marginLeft: '0', }}>Create Product</Button>
            </Link>
            <ProductTable />
        </div>
    )
}