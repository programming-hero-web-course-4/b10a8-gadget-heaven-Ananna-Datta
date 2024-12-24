import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Main from './components/Main/Main.jsx'
import Home from './components/Home/Home.jsx'
import Category from './components/Category/Category.jsx'
import Statistics from './components/Pages/Statistics.jsx'
import Dashboard from './components/Pages/Dashboard.jsx'
import Products from './components/Products/Products.jsx'
import ProductDetails from './components/Pages/ProductDetails.jsx'
import Card from './components/Pages/Card.jsx'
import Wishlist from './components/Pages/Wishlist.jsx'
import Feedback from './components/Pages/Feedback.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('../category.json'),
        children:[
          {
            path:'/',
            element: <Products></Products>,
            loader: () => fetch('../Items.JSON'),
          },
          {
            path:'/category/:category',
            element: <Products></Products>,
            loader: () => fetch('../Items.JSON'),
          }
        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
          {
            path:'',
            element: <Card></Card>
          },
          {
            path:'wishlist',
            element: <Wishlist></Wishlist>
          }
        ]
      },
      {
        path: '/product/:product_id',
        element:<ProductDetails></ProductDetails>,
        loader: () => fetch('../Items.JSON'),
      },
      {
        path: '/feedback',
        element:<Feedback></Feedback>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
