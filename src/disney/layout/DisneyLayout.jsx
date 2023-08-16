import { Box, Toolbar } from "@mui/material"
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const drawerWith = 240;

const DisneyLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>

        <Navbar drawerWith={drawerWith}/>
        
        <Sidebar drawerWith={drawerWith}/>

        <Box
            component='main'
            sx={{flexGrow:1, p:3}}
        >
            <Toolbar/>
            {children}
        </Box>

    </Box>
  )
}

export default DisneyLayout;