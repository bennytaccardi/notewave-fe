import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SigninPage } from './pages/auth/Signin.page';
import { SignupPage } from './pages/auth/Signup.page';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SigninPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />
  },
  {
    path: '/home',
    element: <HomePage />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
