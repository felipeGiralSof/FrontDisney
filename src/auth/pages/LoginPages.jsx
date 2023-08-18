import { Button, Grid, TextField, Link } from "@mui/material";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

import {login} from '../service/LoginService';
import {useForm} from "react-hook-form";
import {useEffect} from "react";

export const LoginPages = () => {
  const {register, setValue, reset, handleSubmit} = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    setValue('user', "asdsad@asdsa");
    setValue('pass', "sadsadsadsad");
  }, []);

  const onSubmit = async (data) => {
    const response = await login(data);
    if(response.status) {
      const token = response.message.data.substring(7);
      localStorage.setItem('token', token);
      navigate("/disney/listar-personajes");
    }
    reset();
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={ 12 } md={ 6 } sx={{ mt: 2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="ejemplo@gmail.com" 
                fullWidth
                {...register("user", {required: true})}
              />
            </Grid>

            <Grid item xs={ 12 } md={ 6 } sx={{ mt: 2}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña" 
                fullWidth
                {...register("pass", {required: true})}
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
