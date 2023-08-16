import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

export const RegisterPages = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
          <Grid container>

          <Grid item xs={ 12 } md={ 6 } sx={{ mt: 2}}>
              <TextField 
                label="Nombre Completo" 
                type="text" 
                placeholder="Digita tu nombre completo" 
                fullWidth
              />
            </Grid>
            
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
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color="inherit" to="/auth/login">
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  );
};
