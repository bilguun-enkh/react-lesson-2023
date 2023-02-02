import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as ROUTERLink } from 'react-router-dom';



export default function AddProjectBreadCrumbs() {
    const breadcrumbs = [
        <ROUTERLink to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
            <Link underline="hover" key="1" color="inherit" href="/" style={{ width: '500px', marginLeft: '280px' }}>
                Root
            </Link>
        </ROUTERLink>,
        <ROUTERLink to={'/Products'} style={{ textDecoration: 'none', color: 'black' }}  >
            < Link underline="hover" key="2" color="inherit">
                Products
            </Link>
        </ROUTERLink >,
        <ROUTERLink to={''} style={{ textDecoration: 'none', color: 'black' }}  >
            < Link underline="hover" key="3" color="inherit">
                Add Products
            </Link>
        </ROUTERLink >,
    ];

    return (
        <Stack spacing={2}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    );
}