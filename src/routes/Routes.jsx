import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import AddSpotPage from "../pages/AddSpotPage";

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
          path: '/add-spot',
          element: <AddSpotPage />,
        }
    ]
  },
]);

export default router;
