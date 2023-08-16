import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Link, NavLink  } from "react-router-dom";

const Sidebar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    Universo Disney
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                <ListItem key="Personajes" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <TurnedInNot/>
                        </ListItemIcon>
                        <Grid container>
                            <Link to="/disney/listar-personajes">
                                <ListItemText primary="Personajes"/>
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>
                <ListItem key="Peliculas-Series" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <TurnedInNot/>
                        </ListItemIcon>
                        <Grid container>
                            <Link to="/disney/listar-peliculas">
                                <ListItemText primary="Peliculas-Series"/>
                            </Link>
                        </Grid>
                    </ListItemButton>
                </ListItem>
            </List>

        </Drawer>

    </Box>
  )
}

export default Sidebar;
