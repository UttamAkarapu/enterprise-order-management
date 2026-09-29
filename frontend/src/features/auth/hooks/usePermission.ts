import { useAppSelector } from '../../../app/hooks';
import {
  rolePermissions,
  type Permission,
} from '../permissions';

export function usePermission(
  permission: Permission
) {
  const role = useAppSelector(
    (state) => state.auth.user?.role
  );

  if (!role) {
    return false;
  }

  return rolePermissions[role].includes(permission);
}