import { Navigate, Route, Routes } from 'react-router-dom';
import ListarPeliculasPage from '../pages/ListarPeliculasPage';
import ListarPersonajesPage from '../pages/ListarPersonajesPage';
import AddPeliculas from '../pages/AddPeliculas';
import AddPersonaje from '../pages/AddPersonaje';

export const DisneyRoutes = () => {
  return (
    <Routes>
        <Route path='/agregar-pelicula' element={ <AddPeliculas/> } />
        <Route path='/agregar-personaje' element={ <AddPersonaje/> } />
        <Route path='/listar-peliculas' element={ <ListarPeliculasPage/> } />
        <Route path='/listar-personajes' element={ <ListarPersonajesPage/> } />
        <Route path='/*' element={ <Navigate to="/disney/listar-personajes" /> } />
    </Routes>
  );
};
