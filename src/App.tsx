import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home, NotFound } from '@components/screens'

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
      path: '*',
      element: <NotFound />
    }
  ])

  return <RouterProvider router={router} />
}
