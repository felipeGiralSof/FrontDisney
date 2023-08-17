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
import DisneyLayout from "../layout/DisneyLayout";
import ButtonAdd from '../components/ButtonAdd';

function createData(imagen, titulo, fecha_creacion) {
  return {
    imagen, 
    titulo, 
    fecha_creacion,
    detalle: [
      {
        calificacion: '5',
        personajes_asociados: '11091700',
      },
      {
        calificacion: '10',
        personajes_asociados: '11',
      },
    ],
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
        <TableCell align="center">{row.titulo}</TableCell>
        <TableCell align="center">{row.fecha_creacion}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                detalle
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Calificaciones</TableCell>
                    <TableCell align="right">Personajes_Asociados</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detalle.map((historyRow) => (
                    <TableRow key={historyRow.calificacion}>
                      <TableCell align='left' component="th" scope="row">
                        {historyRow.calificacion}
                      </TableCell>
                      <TableCell align='right'>{historyRow.personajes_asociados}</TableCell>
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
    titulo: PropTypes.string.isRequired,
    fecha_creacion: PropTypes.string.isRequired,
    detalle: PropTypes.arrayOf(
      PropTypes.shape({
        calificacion: PropTypes.string.isRequired,
        Personajes_Asociados: PropTypes.string.isRequired,
      }),
    )
  }).isRequired,
};

const rows = [
  createData('imagenGoku', 'Gooku1', 'fecha_creacion'),
  createData('imagenGoku', 'Gooku2', 'fecha_creacion'),
  createData('imagenGoku', 'Gooku3', 'fecha_creacion'),
  createData('imagenGoku', 'Gooku4', 'fecha_creacion'),
  createData('imagenGoku', 'Gooku5', 'fecha_creacion'),
];

const ListarPeliculasPage = () => {
  return (
    <DisneyLayout>
        <Typography variant='h3' align='center' p={1}>Listado de Peliculas o Series</Typography>
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow sx={{backgroundColor: 'blue'}}>
                        <TableCell />
                        <TableCell sx={{fontSize:'20px', color:'white', fontWeight:'bold'}} align="center">Imagen</TableCell>
                        <TableCell sx={{fontSize:'20px', color:'white', fontWeight:'bold'}} align="center">Titulo</TableCell>
                        <TableCell sx={{fontSize:'20px', color:'white', fontWeight:'bold'}} align="center">Fecha_Creacion</TableCell>
                        <TableCell sx={{fontSize:'20px', color:'white', fontWeight:'bold'}} align="center">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <Row key={row.name} row={row} />
                ))}
                </TableBody>
            </Table>
        </TableContainer>

        <Link to="/disney/agregar-pelicula">
            <ButtonAdd/>
        </Link>
    </DisneyLayout>
    
  );
}

export default ListarPeliculasPage;