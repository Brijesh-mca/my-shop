import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Nav from './Nav';


const root = ReactDOM.createRoot(document.getElementById('root'));
let Allroute= createBrowserRouter(
[
  {
    path: '/',
    element : <App/>
   },
   {
    path: '/About',
    element : <About/>
   },
   {
    path: '/Contact',
    element : <Contact/>
   },
   {
      path: '/Nav',
      element : <Nav/>
     },
   {
      path:'*',
      element: <Error/>
   }
]
);
root.render(
   <RouterProvider router={Allroute}/>
);


