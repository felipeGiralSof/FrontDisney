import {LogoutOutlined, MenuOutlined} from "@mui/icons-material"
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@mui/material"
import {useNavigate} from "react-router-dom";

const Navbar = ({drawerWith = 240}) => {
    const navigate = useNavigate();

    const handleClickExit = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                width: {sm: `calc(100% - ${drawerWith}px)`},
                ml: {sm: `${drawerWith}px`}
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{mr: 2, display: {sm: 'none'}}}
                >
                    <MenuOutlined/>
                </IconButton>
                <Grid
                    container
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component='div'
                    >
                        DisneyApp
                    </Typography>
                    <IconButton color="error" onClick={handleClickExit}>
                        <LogoutOutlined/>
                    </IconButton>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}

export default Navbar
