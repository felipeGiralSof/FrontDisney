import axiosUtils from "../../utils/axiosUtils.js";

export const login = async (data) => {
    try {
        return {
            status: true,
            message: await axiosUtils.post("/auth/login", data)
        };
    } catch (err) {
        console.log(err);
        return {
            status: false,
            message: err
        };
    }
}
