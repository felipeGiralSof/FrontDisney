import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import {useState} from "react";

import {login} from '../service/LoginService.js';

export const LoginPages = () => {

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleChangeMail = (event) => {
    setUser(event.target.value);
  };

  const handleChangePass = (event) => {
    setPass(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login({ user, pass });
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ handleSubmit }>
          <Grid container>
            <Grid item xs={ 12 } md={ 6 } sx={{ mt: 2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="ejemplo@gmail.com" 
                fullWidth
                value={user}
                onChange={ handleChangeMail }
              />
            </Grid>

            <Grid item xs={ 12 } md={ 6 } sx={{ mt: 2}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña" 
                fullWidth
                value={pass}
                onChange={ handleChangePass }
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2}}>
              <Grid item xs={ 12 } sm={ 6 } sx={{ mt: 2}}>
                <Button 
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  LOGIN
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
