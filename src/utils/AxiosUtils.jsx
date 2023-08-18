import axios from "axios";
import {useContext, useEffect} from "react";
import {AppContext} from "./reducerUtils.jsx";

const useAxiosUtils = () => {
    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {
        axios.defaults.baseURL = 'http://localhost:3000/api/V1';

        if(state.token && state.token.length > 0)
            axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
    }, []);

    return axios;
}

export default useAxiosUtils;
