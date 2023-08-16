import React from 'react'
import ReactDOM from 'react-dom/client'
import DisneyApp from './DisneyApp'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DisneyApp />
    </BrowserRouter>
  </React.StrictMode>,
)
