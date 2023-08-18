import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import ButtonAdd from "../components/ButtonAdd";
import DisneyLayout from "../layout/DisneyLayout";

import usePersonajeService from "../service/personajeService";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import usePeliculasService from "../service/peliculasService.jsx";

const Row = (props) => {
    const {row, parentReloadData} = props;
    const [open, setOpen] = React.useState(false);
    const {eliminar} = usePersonajeService();

    const deletePersonaje = async (id) => {
        const response = await eliminar(id);
        if(response.status) {
            parentReloadData();
        }
        console.log('personaje eliminado');
    }

    return (
        <React.Fragment>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    <div>
                        <img
                            src={`${row.imagen}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${row.imagen}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={row.nombre}
                            loading="lazy"
                        />
                    </div>
                </TableCell>
                <TableCell align="center">{row.nombre}</TableCell>
                <TableCell align="center">
                    <div align="right">
                        <Link to="/disney/agregar-personaje" state={row}>
                            <Button sx={{mr: 1}} variant="contained">Editar</Button>
                        </Link>
                        <Button variant="contained" onClick={() => deletePersonaje(row.id)}>Eliminar</Button>
                    </div>
                </TableCell>
            </TableRow>
            {row.PeliculaSeries.length > 0 &&
                <TableRow>
                    <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{margin: 1}}>
                                <Typography variant="h6" gutterBottom component="div">
                                    detalle peliculas asociadas
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead sx={{backgroundColor: 'yellowgreen'}}>
                                        <TableRow>
                                            <TableCell align="left">imagen</TableCell>
                                            <TableCell align="right">titulo</TableCell>
                                            <TableCell align="right">fechaCreacion</TableCell>
                                            <TableCell align="right">calificacion</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.PeliculaSeries.map((peliculaSeries) => (
                                            <TableRow key={peliculaSeries.id}>
                                                <TableCell
                                                    align='left'
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <div>
                                                        <img
                                                            src={`${peliculaSeries.imagen}?w=164&h=164&fit=crop&auto=format`}
                                                            srcSet={`${peliculaSeries.imagen}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                            alt={peliculaSeries.titulo}
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </TableCell>
                                                <TableCell align='right'>{peliculaSeries.titulo}</TableCell>
                                                <TableCell align='right'>{peliculaSeries.fechaCreacion}</TableCell>
                                                <TableCell align='right'>{peliculaSeries.calificacion}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            }
        </React.Fragment>
    );
}

const ListarPersonajesPage = () => {
    const [personajes, setPersonajes] = useState([]);
    const [peliculas, setPeliculas] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [movies, setMovies] = useState(0);
    const peliculasService = usePeliculasService();
    const personajeService = usePersonajeService();

    const startData = async () => {
        const response = await personajeService.table();
        if(response.message && response.message.data) setPersonajes(response.message.data);
        else setPersonajes(response.message);
    }

    const searchFilter = async (config) => {
        const response = await personajeService.readAll(config);
        if(response.message && response.message.data) setPersonajes(response.message.data);
        else setPersonajes(response.message);
    }

    const getPeliculas = async () => {
        const response = await peliculasService.readAll();
        if(response) setPeliculas(response.message.data);
    }

    useEffect(() => {
        (async () => {
            await startData();
            await getPeliculas({});
        })();
    }, []);

    const handleSearch = () => {
        console.log("handleSearch")
        const params = {};

        if(name && name.length > 0) params.name = name;
        if(age && age > 0) params.age = age;
        if(movies && movies > 0) params.movies = movies;

        if(Object.keys(params).length > 0) searchFilter({ params });
        else startData();
    }

    return (
        <DisneyLayout>
            <Grid container sx={{display: 'flex'}}>
                <form>
                    <TextField 
                        label="Nombre" 
                        variant="filled"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{border: '1px', mr: 1}}
                    />

                    <TextField 
                        label="Edad" 
                        variant="filled"
                        value={age}
                        type="number"
                        onChange={(e) => setAge(e.target.value)}
                        sx={{border: '1px', mr: 1}}
                    />

                    <FormControl sx={{ m: 1, minWidth: 220 }} size="medium">
                        <InputLabel id="demo-simple-select-label">Peliculas</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={movies}
                            label="Age"
                            onChange={(e) => {setMovies(e.target.value)} }
                            variant="filled"    
                        >
                            <MenuItem
                                key={`peli-${0}`}
                                value={0}
                            >Seleccione una opcion</MenuItem>
                            {
                                peliculas.map(el =>
                                    <MenuItem
                                        key={`peli-${el.id}`}
                                        value={el.id}
                                    >{el.titulo}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    <Button color="primary" sx={{padding: 2}} type="button" onClick={handleSearch}>
                            <SearchIcon sx={{fontSize: 30, mr: 1}}/>
                            Buscar
                    </Button>
                </form>
            </Grid>
            <Typography variant='h3' align='center' p={1}>Listado de Personajes</Typography>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead sx={{backgroundColor: 'blue'}}>
                        <TableRow>
                            <TableCell
                                sx={{fontSize: '20px', color: 'white', fontWeight: 'bold'}}
                                align="center"
                            ></TableCell>
                            <TableCell
                                sx={{fontSize: '20px', color: 'white', fontWeight: 'bold'}}
                                align="center"
                            >Imagen</TableCell>
                            <TableCell
                                sx={{fontSize: '20px', color: 'white', fontWeight: 'bold'}}
                                align="center"
                            >Nombre</TableCell>
                            <TableCell
                                sx={{fontSize: '20px', color: 'white', fontWeight: 'bold'}}
                                align="center"
                            >Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {personajes.map((row) => (
                            <Row key={row.id} row={row} parentReloadData={startData} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link to="/disney/agregar-personaje">
                <ButtonAdd/>
            </Link>

        </DisneyLayout>
    )
}

export default ListarPersonajesPage
