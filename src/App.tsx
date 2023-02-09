import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Auth, Home, NotFound } from '@components/screens'

import { Navigation } from '@components/ui'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation element={<Home />} />
    },
    {
      path: '/shop',
      element: <h1>Shop</h1>
    },
    {
      path: '/auth',
      element: <Navigation element={<Auth />} />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return <RouterProvider router={router} />
}
