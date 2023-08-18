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

import DisneyLayout from "../layout/DisneyLayout";
import ButtonAdd from '../components/ButtonAdd';

import usePeliculasService from '../service/peliculasService';
import {useEffect, useRef, useState} from "react";
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search.js";
import LayoutModal from "../components/LayoutModal.jsx";

const Row = (props) => {
    const {eliminar} = usePeliculasService();
    const {row, parentReloadData, modalRef} = props;
    const [open, setOpen] = React.useState(false);

    const deletePelicula = async (id) => {
      const response = await eliminar(id);
      if(response.status) {
        parentReloadData();
      }
      console.log('eliminado exitoso');
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
                        alt={row.titulo}
                        loading="lazy"
                      />
                  </div>
                </TableCell>
                <TableCell align="center">{row.titulo}</TableCell>
                <TableCell align="center">{row.fechaCreacion}</TableCell>
                <TableCell align="center">
                    <div align="right">
                        <Link to="/disney/agregar-pelicula" state={row}>
                            <Button sx={{mr: 1}} variant="contained">Editar</Button>
                        </Link>
                        <Button variant="contained" onClick={() => deletePelicula(row.id)}>Eliminar</Button>
                        <Button variant="contained" onClick={() => modalRef.current.setInitialData(row.id)}>Personajes</Button>
                    </div>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography variant="h6" gutterBottom component="div">
                                Personajes
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">imagen</TableCell>
                                        <TableCell align="right">nombre</TableCell>
                                        <TableCell align="right">edad</TableCell>
                                        <TableCell align="right">peso</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.Personajes.map((personaje) => (
                                        <TableRow key={personaje.id}>
                                            <TableCell align='left' component="th" scope="row">
                                              <div>
                                                <img
                                                    src={`${personaje.imagen}?w=164&h=164&fit=crop&auto=format`}
                                                    srcSet={`${personaje.imagen}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                    alt={personaje.nombre}
                                                    loading="lazy"
                                                />
                                              </div>
                                            </TableCell>
                                            <TableCell align='right'>{personaje.nombre}</TableCell>
                                            <TableCell align='right'>{personaje.edad}</TableCell>
                                            <TableCell align='right'>{personaje.peso}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const ListarPeliculasPage = () => {
    const {table, readAll} = usePeliculasService();
    const [peliculas, setPeliculas] = useState([]);
    const [order, setOrder] = useState([]);
    const [title, setTitle] = useState([]);
    const modalRef = useRef();

    const startData = async () => {
        const response = await table();
        if(response.message && response.message.data) setPeliculas(response.message.data);
        else setPeliculas(response.message);
    }

    useEffect(() => {
        startData();
    }, []);

    const searchFilter = async (config) => {
        const response = await readAll(config);
        if(response.message && response.message.data) setPeliculas(response.message.data);
        else setPeliculas(response.message);
    }

    const handleSearch = () => {
        const params = {};

        if(title && title.length > 0) params.title = title;
        if(order && order.length > 0) params.order = order;

        if(Object.keys(params).length > 0) searchFilter({ params });
        else startData();
    }

    return (
        <DisneyLayout>
            <Grid container sx={{display: 'flex'}}>
                <form>
                    <TextField
                        label="Titulo"
                        variant="filled"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{border: '1px', mr: 1}}
                    />

                    <FormControl sx={{ m: 1, minWidth: 220 }} size="medium">
                        <InputLabel id="demo-simple-select-label">Orden</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={order}
                            label="Age"
                            onChange={(e) => {setOrder(e.target.value)} }
                            variant="filled"
                        >
                            <MenuItem value={""}>Seleccione una opcion</MenuItem>
                            <MenuItem value={"ASC"}>Ascendente</MenuItem>
                            <MenuItem value={"DESC"}>Descendente</MenuItem>
                        </Select>
                    </FormControl>
                    <Button color="primary" sx={{padding: 2}} type="button" onClick={handleSearch}>
                        <SearchIcon sx={{fontSize: 30, mr: 1}}/>
                        Buscar
                    </Button>
                </form>
            </Grid>
            <Typography variant='h3' align='center' p={1}>Listado de Peliculas o Series</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow sx={{backgroundColor: 'blue'}}>
                            <TableCell/>
                            <TableCell sx={{fontSize: '20px', color: 'white', fontWeight: 'bold'}}
                                       align="center">Imagen</TableCell>
                            <TableCell sx={{fontSize: '20px', color: 'white', fontWeight: 'bold'}}
                                       align="center">Titulo</TableCell>
                            <TableCell sx={{fontSize: '20px', color: 'white', fontWeight: 'bold'}}
                                       align="center">Fecha_Creacion</TableCell>
                            <TableCell sx={{fontSize: '20px', color: 'white', fontWeight: 'bold'}}
                                       align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {peliculas.map((row) => (
                            <Row
                                key={`pelicula-${row.id}`}
                                row={row}
                                parentReloadData={startData}
                                modalRef={modalRef}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Link to="/disney/agregar-pelicula">
                <ButtonAdd/>
            </Link>
            <LayoutModal ref={modalRef} type={"Personajes"} parentReloadData={startData} />
        </DisneyLayout>

    );
}

export default ListarPeliculasPage;