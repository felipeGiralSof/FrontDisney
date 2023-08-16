import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ButtonAdd from "../components/ButtonAdd";
import DisneyLayout from "../layout/DisneyLayout";

import { Link } from "react-router-dom";
import { Typography } from '@mui/material';

const createData = (imagen, nombre, fecha_creacion ) => {
    return { 
        imagen, 
        nombre, 
        fecha_creacion 
    };
}

const rows = [
    createData('imagen_Goku', 'Goku', '2023-08-22'),
    createData('imagen_Tortugas', 'Tortuga', '2023-08-21'),
    createData('imagen_caballos', 'Caballo', '2023-08-20'),
];

const ListarPersonajesPage = () => {
  return (
    <DisneyLayout>
        <Typography variant='h3' align='center' p={1}>Listado de Personajes</Typography>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{backgroundColor: 'blue'}}>
                    <TableRow>
                        <TableCell sx={{fontSize:'20px', color:'white', fontWeight:'bold'}} align="center">Imagen</TableCell>
                        <TableCell sx={{fontSize:'20px', color:'white', fontWeight:'bold'}} align="center">Titulo</TableCell>
                        <TableCell sx={{fontSize:'20px', color:'white', fontWeight:'bold'}} align="center">Fecha Creacion</TableCell>
                        <TableCell sx={{fontSize:'20px', color:'white', fontWeight:'bold'}} align="center">Detalle</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row" align="center">{row.imagen}</TableCell>
                        <TableCell align="center">{row.titulo}</TableCell>
                        <TableCell align="center">{row.fecha_creacion}</TableCell>
                        <TableCell align="center">{row.titulo}</TableCell>
                        </TableRow>
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
