import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { BlogListPage } from './pages/BlogListPage'
import { BlogPage } from './pages/BlogPage'

export enum routes {
  BLOG = '/blog/:blogName',
  BLOG_LIST = '/blog',
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={routes.BLOG_LIST} />,
  },
  {
    path: routes.BLOG_LIST,
    element: <BlogListPage />,
  },
  {
    path: routes.BLOG,
    element: <BlogPage />,
  },
])

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}
