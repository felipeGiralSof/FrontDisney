import React from 'react'
import ReactDOM from 'react-dom/client'
import DisneyApp from './DisneyApp'
import './styles.css'
import {BrowserRouter} from 'react-router-dom'
import {AppProvider} from "./utils/reducerUtils.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <DisneyApp/>
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
