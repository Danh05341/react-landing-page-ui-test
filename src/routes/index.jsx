import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

const sharedRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: sharedRoutes,
  },
])

export default router
