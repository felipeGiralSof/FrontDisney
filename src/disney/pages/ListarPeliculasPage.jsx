import ButtonAdd from "../components/ButtonAdd";
import DisneyLayout from "../layout/DisneyLayout";

import { Link } from "react-router-dom";

const ListarPeliculasPage = () => {
  return (
    <DisneyLayout>
        <h1>ListarPeliculasPage</h1>

        <Link to="/disney/agregar-pelicula">
            <ButtonAdd/>
        </Link>
    </DisneyLayout>
  )
}

export default ListarPeliculasPage
