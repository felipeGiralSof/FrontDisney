import useAxiosUtils from "../../utils/AxiosUtils";

const usePersonajeService = () => {
    const axios = useAxiosUtils();

    const create = async (data) => {
        try {
            const response = await axios.post("/characters", data);
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
            const response = await axios.get("/characters", config);
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
            const response = await axios.put(`/characters/${id}`, data);
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
            const response = await axios.delete(`/characters/${id}`);
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
            const response = await axios.get("/characters/details");
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

    return {create, readAll, update, eliminar, table};
}

export default usePersonajeService;
