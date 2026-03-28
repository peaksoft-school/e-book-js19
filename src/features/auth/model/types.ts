export const ROLES = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  VENDOR: 'VENDOR',
  GUEST: 'GUEST'
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
