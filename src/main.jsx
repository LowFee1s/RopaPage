import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './index.css'
import ProductsOverview from './components/ProductsOverview.jsx'
import CartPage from './components/CartView.jsx'
import MenuNavegationView from './components/MenuNavegationView.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="DetalleProducto" element={<ProductsOverview />} />
  </Routes>
  </BrowserRouter>,
)
