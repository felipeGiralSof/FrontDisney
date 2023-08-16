import { IconButton, Typography } from "@mui/material"
import DisneyLayout from "../layout/DisneyLayout";
import NothingSelectedView from "../views/NothingSelectedView";
import AddPersonaje from "../views/AddPersonaje";
import { Add, AddOutlined } from "@mui/icons-material";


const DisneyPage = () => {
  return (
    <DisneyLayout>
        {/* <Typography variant='h1'>DisneyPages</Typography> */}
        {/* <NothingSelectedView/> */}
        <AddPersonaje/>

        <IconButton
            size='large'
            sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
        }}
        >
            <AddOutlined sx={{fontSize: 30}}/>
        </IconButton>
    </DisneyLayout>
  )
}

export default DisneyPage;