import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Update from "./pages/Update.jsx"
import Create from "./pages/Create.jsx"

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/create',
    element:<Create/>
  },
  {
    path:'/:id',
    element:<Update/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
