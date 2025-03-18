import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/register';
import Layout from '../components/layout';
import Login from '../pages/login';
import Home from '../pages/homePage';
import ProtectedRoute from '../components/protectedrout';

 const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),  
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default AppRoutes;
