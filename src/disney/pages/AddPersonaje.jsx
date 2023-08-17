import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form';

import DisneyLayout from "../layout/DisneyLayout";
import { create } from '../service/personajeService.js';
import {useState} from "react";

const AddPersonaje = () => {
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

    const [message, setMessage] = useState("");

    const onSubmit = async (data) => {
        console.log(data);
        const response = await create(data);
        if(response.status) {
            setMessage("Creado correctamente");
            reset();
        }
        else setMessage("Error al crear")
    }

    return (
        <DisneyLayout>
            <Grid
                container
                direction='row'
                justifyContent='space-between'
                alignItems='center' sx={{ mb: 1 }}
            >
                <Grid item>
                    <Typography
                        fontSize={ 39 }
                        fontWeight='light'
                    >Crear Nuevo Personaje</Typography>
                </Grid>
                <Grid container>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            type="text"
                            variant="filled"
                            fullWidth
                            placeholder="Ingresa link de imagen"
                            label="Imagen"
                            sx={{ border: '1px', mb: 1 }}
                            {...register("imagen", { required: true })}
                        />
                        <TextField
                            type="text"
                            variant="filled"
                            fullWidth
                            placeholder="Ingresa tu Nombre"
                            label="Nombre"
                            sx={{ border: '1px', mb: 1 }}
                            {...register("nombre", { required: true })}
                        />

                        <TextField
                            type="number"
                            variant="filled"
                            fullWidth
                            placeholder="Ingresa tu Edad"
                            label="Edad"
                            sx={{ border: '1px', mb: 1 }}
                            {...register("edad", { required: true })}
                        />

                        <TextField
                            type="number"
                            variant="filled"
                            fullWidth
                            placeholder="Ingresa tu Peso"
                            label="Peso"
                            sx={{ border: '1px', mb: 1 }}
                            {...register("peso", { required: true })}
                        />

                        <TextField
                            type="text"
                            variant="filled"
                            fullWidth
                            multiline
                            placeholder="¿Ingresa tu Historia?"
                            minRows={ 5 }
                            {...register("historia", { required: true })}
                        />

                        <Typography sx={{mr: 1}}>{message}</Typography>

                        <Button color="primary" sx={{ padding: 2 }} type="submit">
                            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                            Guardar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </DisneyLayout>
    );
}

export default AddPersonaje;
