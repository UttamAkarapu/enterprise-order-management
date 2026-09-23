import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
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
]);