import ButtonAdd from "../components/ButtonAdd";
import DisneyLayout from "../layout/DisneyLayout";

import { Link } from "react-router-dom";


const ListarPersonajesPage = () => {
  return (
    <DisneyLayout>
        <h1>ListarPersonajesPage</h1>

        <Link to="/disney/agregar-personaje">
            <ButtonAdd/>
        </Link>

    </DisneyLayout>
  )
}

export default ListarPersonajesPage
