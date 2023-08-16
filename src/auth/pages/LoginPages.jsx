import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";


export const LoginPages = () => {
  return (
    <AuthLayout title="Login">
      <form>
          <Grid container>
            <Grid item xs={ 12 } md={ 6 } sx={{ mt: 2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="ejemplo@gmail.com" 
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } md={ 6 } sx={{ mt: 2}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña" 
                fullWidth
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2}}>
              <Grid item xs={ 12 } sm={ 6 } sx={{ mt: 2}}>
                <Button 
                  variant="contained"
                  fullWidth
                >
                  LOGIN
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } sx={{ mt: 2}} >
                <Button 
                  variant="contained"
                  fullWidth
                >
                  <Google/>
                  <Typography sx={{ml: 1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  );
};
