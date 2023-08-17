import axiosUtils from "../../utils/axiosUtils.js";

export const login = async (data) => {
    try {
        return await axiosUtils.post("/auth/login", data);
    } catch (err) {
        console.log(err);
        return err;
    }
}
