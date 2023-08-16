import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'

import DisneyLayout from "../layout/DisneyLayout";


const AddPersonaje = () => {
  return (
    <DisneyLayout>
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light' >Crear Nuevo Personaje</Typography>
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
                    placeholder="Ingresa tu Nombre"
                    label="Nombre"
                    sx={{ border: '1px', mb: 1 }}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingresa tu Edad"
                    label="Edad"
                    sx={{ border: '1px', mb: 1 }}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingresa tu Peso"
                    label="Peso"
                    sx={{ border: '1px', mb: 1 }}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Ingresa tu Historia?"
                    minRows={ 5 }
                />
            </Grid>
            {/* Image gallery */}
            {/* <ImageGallery /> */}
        </Grid>
    </DisneyLayout>
  )
}

export default AddPersonaje;
