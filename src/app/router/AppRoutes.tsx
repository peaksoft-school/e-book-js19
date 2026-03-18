import { createBrowserRouter, RouterProvider } from 'react-router';
import { lazy } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { AdminLayout } from '../../widgets/layout/admin/AdminLayout';

const Auth = lazy(() => import('../../pages/auth/ui/Auth'));
const Landing = lazy(() => import('../../pages/landing/Landing'));
const VendorLanding = lazy(() => import('../../pages/vendor/vendor-landing/ui/VendorLanding'));

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Landing,
      HydrateFallback: () => <div>Загрузка...</div>
    },

    {
      path: '/auth',
      Component: Auth,
      HydrateFallback: () => <div>Загрузка....</div>
    },

    {
      path: '/admin',
      element: (
        <PrivateRoute roles={['ADMIN']}>
          <AdminLayout />
        </PrivateRoute>
      )
    },

    {
      path: 'user/vendor',
      Component: VendorLanding
    }
  ]);

  return <RouterProvider router={router} />;
};
