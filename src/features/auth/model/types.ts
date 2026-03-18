export const ROLES = {
  GUEST: 'GUEST',
  USER: 'USER',
  ADMIN: 'ADMIN',
  VENDOR: 'VENDOR'
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export interface AuthState {
  role: Role;
  email: string | null;
  token: string | null;
  isAuth: boolean;
}
