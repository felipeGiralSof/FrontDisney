import { IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


const ButtonSearch = () => {
  return (
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
        <SearchIcon sx={{fontSize: 30}}/>
    </IconButton>
  )
}

export default ButtonSearch
