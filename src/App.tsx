import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home, NotFound } from '@components/screens'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return <RouterProvider router={router} />
}
