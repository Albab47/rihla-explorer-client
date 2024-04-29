import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import AddSpotPage from "../pages/AddSpotPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MyListPage from "../pages/MyListPage";
import TouristSpotsPage from "../pages/TouristSpotsPage";
import PrivateRoute from "./PrivateRoute";
import SpotDetailsPage, { spotLoader } from "../pages/SpotDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/register',
          element: <RegisterPage />,
        },
        {
          path: '/tourist-spots',
          element: <TouristSpotsPage />,
        },
        {
          path: '/spots/:id',
          element: <SpotDetailsPage />,
          loader: spotLoader,
        },
        {
          path: '/add-spot',
          element: <PrivateRoute><AddSpotPage /></PrivateRoute>,
        },
        {
          path: '/my-list',
          element: <PrivateRoute><MyListPage /></PrivateRoute>,
        }
    ]
  },
]);

export default router;
