import { Navigate } from 'react-router';
import type { ReactNode } from 'react';
import { useAppSelector } from '../../shared/lib/hooks/hooks';
import type { Role } from '../../features/auth/model/types';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: Role[];
  onlyGuest?: boolean;
  fallbackPath?: string;
}

export const ProtectedRoute = ({
  children,
  allowedRoles,
  onlyGuest = false,
  fallbackPath = '/'
}: ProtectedRouteProps) => {
  const { role, isAuth } = useAppSelector((state) => state.auth);

  if (onlyGuest && isAuth) {
    if (role === 'ADMIN') return <Navigate to="/admin" replace />;
    if (role === 'VENDOR') return <Navigate to="/vendor" replace />;

    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to={fallbackPath} replace />;
  }

  return <>{children}</>;
};
