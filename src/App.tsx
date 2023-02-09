import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Auth, Home, NotFound, Shop } from '@components/screens'

import { Navigation } from '@components/ui'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation element={<Home />} />
    },
    {
      path: '/shop',
      element: <Navigation element={<Shop />} />
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
