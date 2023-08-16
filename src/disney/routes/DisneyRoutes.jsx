import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DisneyPage from '../pages/DisneyPage'

export const DisneyRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <DisneyPage/> } />
        <Route path='/*' element={ <Navigate to="/" /> } />
    </Routes>
  );
};
