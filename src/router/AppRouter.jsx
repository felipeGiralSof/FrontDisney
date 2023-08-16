import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import { DisneyRoutes } from '../disney/routes/DisneyRoutes'

const AppRouter = () => {
  return (
    <Routes>

        <Route path='/auth/*' element={ <AuthRoutes/> } />

        <Route path='/*' element={ <DisneyRoutes/> } />

        <Route/>
    </Routes>
  )
}

export default AppRouter
