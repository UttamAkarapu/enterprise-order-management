import type { UserRole } from './types';

export type Permission =
  | 'dashboard:view'
  | 'orders:view'
  | 'orders:create'
  | 'orders:edit'
  | 'orders:delete';

export const rolePermissions: Record<
  UserRole,
  Permission[]
> = {
  admin: [
    'dashboard:view',
    'orders:view',
    'orders:create',
    'orders:edit',
    'orders:delete',
  ],

  manager: [
    'dashboard:view',
    'orders:view',
    'orders:create',
    'orders:edit',
  ],

  viewer: [
    'dashboard:view',
    'orders:view',
  ],
};