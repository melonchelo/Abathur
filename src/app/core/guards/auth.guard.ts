import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { ServicioAuth } from '../servicio-auth';

/** F-07 · Sin sesión, las rutas privadas redirigen a `/ingreso`. */
export const authGuard: CanActivateFn = () => {
  const auth = inject(ServicioAuth);
  const router = inject(Router);
  if (auth.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(['/ingreso']);
};