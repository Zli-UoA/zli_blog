import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { BlogListPage } from './pages/BlogListPage'
import { BlogPage } from './pages/BlogPage'

export enum routes {
  BLOG = '/blog/:blogName',
  BLOG_LIST = '/blog',
  ABOUT = '/about',
}

const router = createHashRouter([
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
  {
    path: routes.ABOUT,
    element: <AboutPage />,
  },
])

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}

export const isInBlog = (path: string): boolean => {
  return path.slice(0, 5) === routes.BLOG_LIST
}

export const isInAbout = (path: string): boolean => {
  return path.slice(0, 6) === routes.ABOUT
}
