import React from 'react'
import Header from './components/Header';
import Movies from './components/Movies';
import Weather from './components/Weather';

import {createBrowserRouter, RouterProvider,  } from  'react-router-dom'

const allRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element:<Movies/>
      }, {
        path: "/weather",
        element:<Weather/>
      }

    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={allRoutes}/>
  )
}

export default App
