import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from "./pages/Home.jsx"
import { Shop } from './pages/Shop.jsx'
import { AboutUs } from './pages/AboutUs.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/shop",
    element: <Shop/>
  },
  {
    path:"/AboutUs",
    element: <AboutUs/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
