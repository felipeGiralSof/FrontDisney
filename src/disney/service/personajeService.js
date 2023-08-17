import axiosUtils from "../../utils/axiosUtils.js";

export const create = async (data) => {
    try {
        const response = await axiosUtils.post("/characters", data);
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

export const table = async () => {
    try {
        const response = await axiosUtils.get("/characters/details");
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
