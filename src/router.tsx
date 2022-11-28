import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { BlogPage } from './pages/BlogPage'

export enum routes {
  BLOG = '/blog/:blogName',
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={routes.BLOG} />,
  },
  {
    path: routes.BLOG,
    element: <BlogPage />,
  },
])

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}
