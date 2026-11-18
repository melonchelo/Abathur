import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import type { Rol } from '../models';
import { ServicioAuth } from '../servicio-auth';

/**
 * F-08 · Corta la navegación si el rol no alcanza.
 * Sin sesión redirige a ingreso (misma regla que `authGuard`).
 */
export function roleGuard(...roles: readonly Rol[]): CanActivateFn {
  return () => {
    const auth = inject(ServicioAuth);
    const router = inject(Router);
    if (!auth.isAuthenticated()) {
      return router.createUrlTree(['/ingreso']);
    }
    if (auth.hasRole(...roles)) {
      return true;
    }
    return router.createUrlTree(['/']);
  };
}