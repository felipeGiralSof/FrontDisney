import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import {useState} from "react";

import { register } from '../service/RegisterService.js';

export const RegisterPages = () => {

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await register({ user, pass, name });
    if(response.status) setResponse("Usuario creado");
    else setResponse("Error al crear");
    cleanData();
  }

  const cleanData = () => {
    setUser("");
    setPass("");
    setName("");
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeUser = (event) => {
    setUser(event.target.value);
  }

  const handleChangePass = (event) => {
    setPass(event.target.value);
  }

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={ 12 } md={ 6 } sx={{ mt: 2}}>
              <TextField 
                label="Nombre Completo" 
                type="text" 
                placeholder="Digita tu nombre completo" 
                fullWidth
                value={name}
                onChange={handleChangeName}
              />
            </Grid>
            
            <Grid item xs={ 12 } md={ 6 } sx={{ mt: 2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="ejemplo@gmail.com" 
                fullWidth
                value={user}
                onChange={handleChangeUser}
              />
            </Grid>

            <Grid item xs={ 12 } md={ 6 } sx={{ mt: 2}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña" 
                fullWidth
                value={pass}
                onChange={handleChangePass}
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2}}>
              <Grid item xs={ 12 } sm={ 6 } sx={{ mt: 2}}>
                <Button 
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr: 1}}>{response}</Typography>
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
