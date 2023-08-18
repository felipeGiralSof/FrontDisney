import {Navigate, Route, Routes} from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import {DisneyRoutes} from '../disney/routes/DisneyRoutes'

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

const PrivateRoute = (Component) =>
    localStorage.getItem("token") ?
        <Component /> :
        <Navigate to="/" />;


export default AppRouter
