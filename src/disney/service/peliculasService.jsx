import useAxiosUtils from "../../utils/AxiosUtils.jsx";

const usePeliculasService = () => {
    const axios = useAxiosUtils();

    const create = async (data) => {
        try {
            const response = await axios.post("/movies", data);
            return {
                status: true,
                message: response
            };
        } catch (err) {
            console.log(err);
            return {
                status: false,
                message: err
            };
        }
    }

    const readAll = async (config) => {
        try {
            const response = await axios.get("/movies", config);
            return {
                status: true,
                message: response
            };
        } catch (err) {
            console.log(err);
            return {
                status: false,
                message: err
            };
        }
    }

    const update = async (id, data) => {
        try {
            const response = await axios.put(`/movies/${id}`, data);
            return {
                status: true,
                message: response
            };
        } catch (err) {
            console.log(err);
            return {
                status: false,
                message: err
            };
        }
    }

    const eliminar = async (id) => {
        try {
            const response = await axios.delete(`/movies/${id}`);
            return {
                status: true,
                message: response
            };
        } catch (err) {
            console.log(err);
            return {
                status: false,
                message: []
            };
        }
    }

    const table = async () => {
        try {
            const response = await axios.get("/movies");
            return {
                status: true,
                message: response
            };
        } catch (err) {
            console.log(err);
            return {
                status: false,
                message: err
            };
        }
    }

    const asociatePersonaje = async (id, data) => {
        try {
            const response = await axios.put(`/movies/${id}/personajes`, data);
            return {
                status: true,
                message: response
            };
        } catch (err) {
            console.log(err);
            return {
                status: false,
                message: err
            };
        }
    }

    return {create, readAll, update, eliminar, table, asociatePersonaje};
}

export default usePeliculasService;
