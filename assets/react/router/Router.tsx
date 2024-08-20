
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from '../views/home/HomeView';
import ProfileView from "../views/profile/ProfileView";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView/>
  },
  {
    path: '/profile',
    element: <ProfileView/>
  }
])

export default function Router() {
  return (
    <RouterProvider router={router}/>
  )
}
