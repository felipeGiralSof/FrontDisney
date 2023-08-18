import axiosUtils from "../../utils/axiosUtils.js";

export const create = async (data) => {
    try {
        const response = await axiosUtils.post("/movies", data);
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

export const update = async (id, data) => {
    try {
        const response = await axiosUtils.put(`/movies/${id}`, data);
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

export const eliminar = async (id) => {
    try {
        const response = await axiosUtils.delete(`/movies/${id}`);
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

export const table = async () => {
    try {
        const response = await axiosUtils.get("/movies");
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
