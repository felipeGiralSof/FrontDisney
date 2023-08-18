import {Button, Grid, TextField, Typography} from "@mui/material";
import {SaveOutlined} from "@mui/icons-material";

import {useForm} from 'react-hook-form';
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import DisneyLayout from "../layout/DisneyLayout";
import {create, update} from '../service/peliculasService';

const AddPeliculas = () => {
    const {register, setValue, reset, handleSubmit, watch, formState: {errors}} = useForm();

    const location = useLocation();
    const [id, setId] = useState(0);
    const [type, setType] = useState("Creación");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if(location.state) {
            setType("Actualización");
            setDataForm(location.state);
        }
    }, []);

    const setDataForm = (data) => {
        setId(data.id);
        setValue('imagen', data.imagen);
        setValue('titulo', data.titulo);
        setValue('fechaCreacion', data.fechaCreacion);
        setValue('calificacion', data.calificacion);
        setValue('personajesAsociados', data.personajesAsociados);
    }

    const onSubmit = async (data) => {
        let response = null;
        switch (type) {
            case "Creación":
                response = await create(data);
                break;
            case "Actualización":
                response = await update(id, data);
                break;
            default:
                break;
        }

        if (response && response.status) {
            setMessage(`${type} exitoso`);
            reset();
        } else setMessage(`${type} fallido`);
    }

    return (
        <DisneyLayout>
            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}}>
                <Grid item>
                    <Typography fontSize={39} fontWeight='light'>Crear Nueva Pelicula</Typography>
                </Grid>

                <Grid container>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            type="text"
                            variant="filled"
                            fullWidth
                            placeholder="Ingresa tu Imagen"
                            label="Imagen"
                            sx={{border: '1px', mb: 1}}
                            {...register("imagen", {required: true})}
                        />

                        <TextField
                            type="text"
                            variant="filled"
                            fullWidth
                            placeholder="Ingresa El Titulo"
                            label="Titulo"
                            sx={{border: '1px', mb: 1}}
                            {...register("titulo", {required: true})}
                        />

                        <TextField
                            type="text"
                            variant="filled"
                            fullWidth
                            placeholder="Ingresa la Fecha de Creacion"
                            label="Fecha de Creacion"
                            sx={{border: '1px', mb: 1}}
                            {...register("fechaCreacion", {required: true})}
                        />

                        <TextField
                            type="number"
                            variant="filled"
                            fullWidth
                            placeholder="la calificacion de 1 a 5"
                            label="Calificacion"
                            sx={{border: '1px', mb: 1}}
                            {...register("calificacion", {required: true})}
                        />

                        {/* <TextField
                            type="number"
                            variant="filled"
                            fullWidth
                            placeholder="Ingresa los Personajes Asociados"
                            label="Personajes Asociados"
                            sx={{border: '1px', mb: 1}}
                            {...register("personajesAsociados")}
                        /> */}
                        <Typography sx={{mr: 1}}>{message}</Typography>

                        <Button color="primary" sx={{padding: 2}} type="submit">
                            <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                            Guardar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </DisneyLayout>
    )
}
export default AddPeliculas
