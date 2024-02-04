import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthPage } from './pages/auth/Auth.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
