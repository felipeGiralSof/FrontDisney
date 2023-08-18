import {Navigate, Route, Routes} from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import {DisneyRoutes} from '../disney/routes/DisneyRoutes'
import {useContext} from "react";
import {AppContext} from "../utils/reducerUtils.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth/*' element={<AuthRoutes/>}/>
            <Route
                path='/disney/*'
                element={ PrivateRoute(DisneyRoutes) }
            />
            <Route path='/*' element={<Navigate to="/auth"/>}/>
        </Routes>
    );
}

const PrivateRoute = (Component) => {
    const [state, dispatch] = useContext(AppContext);
    return state.token && state.token.length > 0 ?
        <Component /> :
        <Navigate to="/" />;
};


export default AppRouter
