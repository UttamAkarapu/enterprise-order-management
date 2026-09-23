import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ProtectedRoute from '../routes/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },

  {
    element: <ProtectedRoute />,

    children: [
      {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,

        children: [
          {
            index: true,
            element: <Dashboard />,
          },

          {
            path: 'dashboard',
            element: <Dashboard />,
          },

          {
            path: 'orders',
            element: <Orders />,
          },
        ],
      },
    ],
  },
]);