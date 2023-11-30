// import { useState } from 'react'
import '../styles/App.css'
import CardList from './CardList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Template from './Template';


const router = createBrowserRouter([
  {
      path: '/',
      element: <Template />,
      errorElement: <div>404</div>,
      children: [
          {
              index: true,
              element: <CardList />,
          },
      ]
  }
 
])

function App() {
  return <RouterProvider router={router} />
}

export default App;

