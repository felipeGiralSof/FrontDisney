import useAxiosUtils from "../../utils/AxiosUtils.jsx";

const useRegisterService = () => {
    const axios = useAxiosUtils();

    const register = async (data) => {
        try {
            const response = await axios.post("/auth/register", data);
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

    return {register}
}

export default useRegisterService;
