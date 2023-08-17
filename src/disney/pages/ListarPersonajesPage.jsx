import * as React from 'react';
import PropTypes from 'prop-types';
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

import { Link } from "react-router-dom";
import {useState} from "react";

import ButtonAdd from "../components/ButtonAdd";
import DisneyLayout from "../layout/DisneyLayout";


const createData = (imagen, nombre, fecha_creacion ) => {
    return { 
        imagen, 
        nombre, 
        fecha_creacion ,
        detalle: [
            {
                imagen: "sadsd",
                titulo: "fsdffdf",
                fechaCreacion: "2022-01-01T00:00:00.000Z",
                calificacion: 2,
            }
        ]
    };
}

const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row" align="center">{row.imagen}</TableCell>
          <TableCell align="center">{row.nombre}</TableCell>
          <TableCell align="center">{row.fecha_creacion}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
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
                    {row.detalle.map((historyRow) => (
                      <TableRow key={historyRow.imagen}>
                        <TableCell align='left' component="th" scope="row">
                          {historyRow.imagen}
                        </TableCell>
                        <TableCell align='right'>{historyRow.titulo}</TableCell>
                        <TableCell align='right'>{historyRow.fechaCreacion}</TableCell>
                        <TableCell align='right'>{historyRow.calificacion}</TableCell>
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

Row.propTypes = {
    row: PropTypes.shape({
      imagen: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      fecha_creacion: PropTypes.string.isRequired,
      detalle: PropTypes.arrayOf(
        PropTypes.shape({
            imagen: PropTypes.string.isRequired,
            titulo: PropTypes.string.isRequired,
            fechaCreacion: PropTypes.string.isRequired,
            calificacion: PropTypes.number.isRequired,
        }),
      )
    }).isRequired,
  };

const rows = [
    createData('imagen_Goku', 'Goku', '2023-08-22'),
    createData('imagen_Tortugas', 'Tortuga', '2023-08-21'),
    createData('imagen_caballos', 'Caballo', '2023-08-20'),
];

const ListarPersonajesPage = () => {
    const [personajes, setPersonajes] = useState([]);
    return (
        <DisneyLayout>
            <Typography variant='h3' align='center' p={1}>Listado de Personajes</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{backgroundColor: 'blue'}}>
                        <TableRow>
                            <TableCell sx={{fontSize:'20px', color:'white', fontWeight:'bold'}} align="center">Imagen</TableCell>
                            <TableCell sx={{fontSize:'20px', color:'white', fontWeight:'bold'}} align="center">Nombre</TableCell>
                            <TableCell sx={{fontSize:'20px', color:'white', fontWeight:'bold'}} align="center">Fecha Creacion</TableCell>
                            <TableCell sx={{fontSize:'20px', color:'white', fontWeight:'bold'}} align="center">Detalle</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
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
