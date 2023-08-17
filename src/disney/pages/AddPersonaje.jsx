import {SaveOutlined} from '@mui/icons-material'
import {Button, Grid, TextField, Typography} from '@mui/material'
import {useForm} from 'react-hook-form';
import DisneyLayout from "../layout/DisneyLayout";
import {create, update} from '../service/personajeService.js';
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";


const AddPersonaje = () => {
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
        setValue('nombre', data.nombre);
        setValue('edad', data.edad);
        setValue('peso', data.peso);
        setValue('historia', data.historia);
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
            <Grid
                container
                direction='row'
                justifyContent='space-between'
                alignItems='center' sx={{mb: 1}}
            >
                <Grid item>
                    <Typography
                        fontSize={39}
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
                            sx={{border: '1px', mb: 1}}
                            {...register("imagen", {required: true})}
                        />
                        <TextField
                            type="text"
                            variant="filled"
                            fullWidth
                            placeholder="Ingresa tu Nombre"
                            label="Nombre"
                            sx={{border: '1px', mb: 1}}
                            {...register("nombre", {required: true})}
                        />

                        <TextField
                            type="number"
                            variant="filled"
                            fullWidth
                            placeholder="Ingresa tu Edad"
                            label="Edad"
                            sx={{border: '1px', mb: 1}}
                            {...register("edad", {required: true})}
                        />

                        <TextField
                            type="number"
                            variant="filled"
                            fullWidth
                            placeholder="Ingresa tu Peso"
                            label="Peso"
                            sx={{border: '1px', mb: 1}}
                            {...register("peso", {required: true})}
                        />

                        <TextField
                            type="text"
                            variant="filled"
                            fullWidth
                            multiline
                            placeholder="¿Ingresa tu Historia?"
                            minRows={5}
                            {...register("historia", {required: true})}
                        />

                        <Typography sx={{mr: 1}}>{message}</Typography>

                        <Button color="primary" sx={{padding: 2}} type="submit">
                            <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                            Guardar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </DisneyLayout>
    );
}

export default AddPersonaje;
