import useAxiosUtils from "../../utils/AxiosUtils";

const useLoginService = () => {
    const axios = useAxiosUtils();

    const login = async (data) => {
        try {
            return {
                status: true,
                message: await axios.post("/auth/login", data)
            };
        } catch (err) {
            console.log(err);
            return {
                status: false,
                message: err
            };
        }
    };

    return { login }
}

export default useLoginService;