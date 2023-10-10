import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Shop from './Components/Shop/Shop.jsx';
import ItemsDetails from './Components/Shop/ItemsDetails/ItemsDetails.jsx';
import store from './Redux/Value.js';

import { Provider } from 'react-redux';
import Blog from './Components/Blog/Blog.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/ContactUs/Contact.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'Shop',
        element:<Shop/>
      },
      {
        path:'itemsDetails',
        element:<ItemsDetails/>
      },
      {
        path:'Blog',
        element:<Blog/>
      }
      ,
      {
        path:'About',
        element:<About/>
      }
      ,
      {
        path:'Contact',
        element:<Contact/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
