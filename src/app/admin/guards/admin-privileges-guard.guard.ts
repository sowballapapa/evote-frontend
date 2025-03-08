import { CanActivateFn } from '@angular/router';

export const adminPrivilegesGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
