import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages';
import { paths } from './paths';
import Login from '../pages/auth/login';

export const router = createBrowserRouter([
  {
    path: paths.index,
    element: <RootLayout />,
    children: [
      {
        path: paths.login,
        element: <Login />,
      },
    ],
  },
]);
