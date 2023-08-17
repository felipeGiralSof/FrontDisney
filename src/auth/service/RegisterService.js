import axiosUtils from "../../utils/axiosUtils.js";

export const register = async (data) => {
    try {
        const response = await axiosUtils.post("/auth/register", data);
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
