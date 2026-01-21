import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import LoginPage from './pages/LoginPage'
import VideojuegosPage from './pages/VideojuegosPage'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={ <LoginPage /> } />
        <Route path='/main' element={ <VideojuegosPage /> } />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
