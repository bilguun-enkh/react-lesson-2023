import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { Link as ROUTERLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;

export default function SideBar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    <List>
                        <ListItem key='Home' disablePadding>
                            <ROUTERLink to={'Home'} style={{ textDecoration: 'none', color: 'black' }} >
                                <ListItemButton>
                                    <ListItemIcon>
                                       <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Home'} />
                                </ListItemButton>
                            </ROUTERLink>
                        </ListItem>
                    </List>
                </Toolbar>
                <Divider />
                <List>
                    {['Users', 'Products'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ROUTERLink to={text} style={{ textDecoration: 'none', color: 'black' }} >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <AccountCircleIcon /> : <Inventory2Icon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ROUTERLink>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <Toolbar />
        </Box>
    );
}
