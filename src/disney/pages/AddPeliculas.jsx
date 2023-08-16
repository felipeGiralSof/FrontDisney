import { Button, Grid, TextField, Typography } from "@mui/material";
import DisneyLayout from "../layout/DisneyLayout";
import { SaveOutlined } from "@mui/icons-material";

const AddPeliculas = () => {
  return (
    <DisneyLayout>
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light' >Crear Nueva Pelicula</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingresa tu Imagen"
                    label="Imagen"
                    sx={{ border: '1px', mb: 1 }}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingresa El Titulo"
                    label="Titulo"
                    sx={{ border: '1px', mb: 1 }}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingresa la Fecha de Creacion"
                    label="Fecha de Creacion"
                    sx={{ border: '1px', mb: 1 }}
                />

                <TextField 
                    type="number"
                    variant="filled"
                    fullWidth
                    placeholder="la calificacion de 1 a 5"
                    label="Calificacion"
                    sx={{ border: '1px', mb: 1 }}
                />

                <TextField 
                    type="number"
                    variant="filled"
                    fullWidth
                    placeholder="Ingresa los Personajes Asociados"
                    label="Personajes Asociados"
                    sx={{ border: '1px', mb: 1 }}
                />
            </Grid>
            {/* Image gallery */}
            {/* <ImageGallery /> */}
        </Grid>
    </DisneyLayout>
  )
}
export default AddPeliculas
