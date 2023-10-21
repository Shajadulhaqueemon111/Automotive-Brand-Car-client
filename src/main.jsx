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
import User from './Components/User/User.jsx';
// import Brand from './Components/Brand/Brand.jsx';
import Update from './Components/Update/Update.jsx';

import ViewDetails from './Components/ViewDetails/ViewDetails.jsx';
import AddedCart from './Components/AddedCart/AddedCart.jsx';
import PrivateRoute from './Components/PrivateRout/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRout></MainRout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('/data.json')
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
        path:'/addedcart',
        element:<AddedCart></AddedCart>,
        loader:()=>fetch('http://localhost:5000/cart')
        
      },
      {
        path:'/product',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/brand/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
      },
     
      {
        path:'/useCard/:brand_name',
        element:<User></User>,
        loader:({params})=>fetch(`http://localhost:5000/user/${params.brand_name}`)
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`) 
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
