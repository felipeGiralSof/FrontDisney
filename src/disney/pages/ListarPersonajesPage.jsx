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

import {table} from "../service/personajeService.js";
import { Button } from '@mui/material';

const Row = (props) => {
    const {row} = props;
    const [open, setOpen] = React.useState(false);

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
                <TableCell component="th" scope="row" align="center">{row.imagen}</TableCell>
                <TableCell align="center">{row.nombre}</TableCell>
                <TableCell align="center">
                    <div align="right">
                        <Button sx={{mr: 1}} variant="contained">Editar</Button>
                        <Button variant="contained">Eliminar</Button>
                    </div>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography variant="h6" gutterBottom component="div">
                                detalle peliculas asociadas
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
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
                                            >{peliculaSeries.imagen}</TableCell>
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
        </React.Fragment>
    );
}

const ListarPersonajesPage = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        table()
            .then(el => {
                console.log("Start", el.message.data);
                setPersonajes(el.message.data);
            });
    }, []);

    return (
        <DisneyLayout>
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
                            <Row key={row.id} row={row}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link to="/disney/agregar-personaje" state={"dsdsdsdd"}>
                <ButtonAdd/>
            </Link>

        </DisneyLayout>
    )
}

export default ListarPersonajesPage
