import { createBrowserRouter, RouterProvider } from "react-router-dom"

export enum routes {
}

const router = createBrowserRouter([])

export const AppRouter: React.FC = () => {
  return <RouterProvider
    router={router}
  />
}