import { Navigate, Route, Routes } from 'react-router-dom';
import ListarPeliculasPage from '../pages/ListarPeliculasPage';
import ListarPersonajesPage from '../pages/ListarPersonajesPage';
import AddPeliculas from '../pages/AddPeliculas';
import AddPersonaje from '../pages/AddPersonaje';

export const DisneyRoutes = () => {
  return (
    <Routes>
        <Route path='/agregar-pelicula' element={ <AddPersonaje/> } />
        <Route path='/agregar-personaje' element={ <AddPeliculas/> } />
        <Route path='/listar-peliculas' element={ <ListarPeliculasPage/> } />
        <Route path='/listar-personajes' element={ <ListarPersonajesPage/> } />
        <Route path='/*' element={ <Navigate to="/disney/listar-peliculas" /> } />
    </Routes>
  );
};
