import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {forwardRef, useEffect, useImperativeHandle} from "react";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import usePersonajeService from "../service/personajeService";
import usePeliculasService from "../service/peliculasService.jsx";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const LayoutModal = forwardRef((props, ref) => {
    const personajeService = usePersonajeService();
    const peliculaService = usePeliculasService();
    const [id, setId] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [rows, setRows] = React.useState([]);
    const [selectValue, setSelectValue] = React.useState([]);

    const setInitialData = (id) => {
        setId(id);
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    useImperativeHandle(ref, () => ({
        setInitialData
    }));

    const getPersonajes = async () => {
        const response = await personajeService.readAll();
        if(response.message && response.message.data) setRows(response.message.data.map(el => ({id: el.id, nombre: el.nombre})));
        else setRows([]);
    }

    const handleChange = (event) => {
        const { target: { value } } = event;
        setSelectValue(typeof value === 'string' ? value.split(',') : value);
    }

    const handleClick = () => {
        if(props.type === "Personajes") peliculaService.asociatePersonaje(id, selectValue)
    }

    useEffect(() => {
        if(props.type === "Personajes") {
            getPersonajes();
            props.parentReloadData();
        }
    }, []);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormControl sx={{ m: 1, minWidth: 220 }} size="medium">
                        <InputLabel id="demo-simple-select-label">{props.type}</InputLabel>
                        <Select
                            multiple
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            variant="filled"
                            value={selectValue}
                            onChange={handleChange}
                        >
                            <MenuItem value={""}>Seleccione una opcion</MenuItem>
                            {rows.map(el =>
                                <MenuItem key={`personaje-${el.id}`} value={el.id}>{el.nombre}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <Button onClick={handleClick}>Guardar</Button>
                </Box>
            </Modal>
        </div>
    );
});

export default LayoutModal;