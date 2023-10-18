import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRout from './Components/MainRout.jsx';
import ErrorPage from './Components/Pages/ErrorPage.jsx';
import Home from './Components/Pages/Home.jsx';
import Login from './Components/Pages/Login.jsx';
import Register from './Components/Pages/Register.jsx';
import AuthProvider, { AuthContext } from './Components/Auth/AuthProvider.jsx';
import AddProduct from './Components/AddProduct.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRout></MainRout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/product',
        element:<AddProduct></AddProduct>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
