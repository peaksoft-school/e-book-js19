import { createBrowserRouter, RouterProvider } from 'react-router';
import { lazy } from 'react';
import { ProtectedRoute } from './ProtectedRoute';
import { AdminLayout } from '../../widgets/layout/admin/AdminLayout';
import { adminRoutes } from './admin/adminRoutes';

const Auth = lazy(() => import('../../pages/auth/Auth'));
const Landing = lazy(() => import('../../pages/landing/Landing'));
const VendorLanding = lazy(() => import('../../pages/vendor/vendor-landing/VendorLanding'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute allowedRoles={['GUEST', 'USER']} fallbackPath="/admin">
        <Landing />
      </ProtectedRoute>
    )
  },
  {
    path: '/vendor',
    element: (
      <ProtectedRoute allowedRoles={['VENDOR']} fallbackPath="/auth">
        <VendorLanding />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute allowedRoles={['ADMIN']} fallbackPath="/auth">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: adminRoutes
  },
  {
    path: '/auth',
    element: (
      <ProtectedRoute onlyGuest fallbackPath="/admin">
        <Auth />
      </ProtectedRoute>
    )
  },
  {
    path: '*',
    element: <div>404 Not Found</div>
  }
]);

export const AppRoutes = () => <RouterProvider router={router} />;
