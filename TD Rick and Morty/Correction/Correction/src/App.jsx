import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './components/Template'
import Home from './pages/Home'
import Details from './pages/Details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'details/:id',
        element: <Details />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
