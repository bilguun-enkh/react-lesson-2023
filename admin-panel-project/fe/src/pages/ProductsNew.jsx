import { TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import AddProjectBreadCrumbs from "../components/NewProductsCrumbs";

export default function ProductsNew() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div >
            <AddProjectBreadCrumbs />
            <Link to={'/Products'} style={{ textDecoration: 'none' }}>
                <Button variant="contained" sx={{ marginBottom: '50px', marginLeft: '0', }}>Back</Button>
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
                <Typography variant="h4" sx={{ marginLeft: '0px', width: '200px', paddingTop: '20px' }}>Add Product</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', width: '700px' }}>
                    <Box sx={{ width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: 'inline-block' }}>Title</Typography>
                        <TextField type='text' name='title'></TextField>
                    </Box>
                    <Box sx={{ width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: 'inline-block' }}>Price</Typography>
                        <TextField type='number' name='price'></TextField>
                    </Box>
                    <Box sx={{ width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: 'inline-block' }}>Image</Typography>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={''}
                            name='image'
                        ></Select>
                    </Box>
                    <Box sx={{ width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: 'inline-block' }}>Size</Typography>
                        <Select
                            value={age}
                            onChange={handleChange}
                            name='size'
                            sx={{ width: '150px' }}
                        >
                            <MenuItem value={10}>Small</MenuItem>
                            <MenuItem value={20}>Medium</MenuItem>
                            <MenuItem value={30}>Large</MenuItem>
                        </Select>
                    </Box>
                    <Box sx={{ width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: 'inline-block' }}>Color</Typography>
                        <Select
                            value={age}
                            onChange={handleChange}
                            name='color'
                            sx={{ width: '150px' }}
                        >
                            <MenuItem value={10}>Small</MenuItem>
                            <MenuItem value={20}>Medium</MenuItem>
                            <MenuItem value={30}>Large</MenuItem>
                        </Select>
                    </Box>
                    <Box sx={{ width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: 'inline-block' }}>Category</Typography>
                        <Select
                            value={age}
                            onChange={handleChange}
                            name='category'
                            sx={{ width: '150px' }}
                        >
                            <MenuItem value={10}>Small</MenuItem>
                            <MenuItem value={20}>Medium</MenuItem>
                            <MenuItem value={30}>Large</MenuItem>
                        </Select>
                    </Box>
                    <Box sx={{ width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: 'inline-block' }}>Description</Typography>
                        <TextField type='text' name='title'></TextField>
                    </Box>
                </Box>
            </Box >
        </div >
    )
}