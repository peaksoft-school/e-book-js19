import type { ReactNode } from 'react';
import { Navigate } from 'react-router';

type Role = 'USER' | 'ADMIN' | 'VENDOR' | 'GUEST';

interface PrivateRouteProps {
  children: ReactNode;
  roles: Role[];
}

export const PrivateRoute = ({ children, roles }: PrivateRouteProps) => {
  const currentRole: Role = 'GUEST';

  if (!roles.includes(currentRole)) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};
