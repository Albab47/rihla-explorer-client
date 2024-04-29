import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import AddSpotPage from "../pages/AddSpotPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MyListPage, { myListLoader } from "../pages/MyListPage";
import TouristSpotsPage from "../pages/TouristSpotsPage";
import PrivateRoute from "./PrivateRoute";
import SpotDetailsPage, { spotLoader } from "../pages/SpotDetailsPage";
import UpdateSpotPage from "../pages/UpdateSpotPage";

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
          element: <PrivateRoute><SpotDetailsPage /></PrivateRoute>,
          loader: spotLoader,
        },
        {
          path: '/add-spot',
          element: <PrivateRoute><AddSpotPage /></PrivateRoute>,
        },
        {
          path: '/update-spot/:id',
          element: <PrivateRoute><UpdateSpotPage /></PrivateRoute>,
          loader: spotLoader
        },
        {
          path: '/my-list/:email',
          element: <PrivateRoute><MyListPage /></PrivateRoute>,
          loader: myListLoader
        }
    ]
  },
]);

export default router;
