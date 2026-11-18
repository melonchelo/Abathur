import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, UrlTree } from '@angular/router';

import { authGuard } from './auth.guard';
import { ServicioAuth } from '../servicio-auth';

describe('authGuard (F-07)', () => {
  it('permite la navegación con sesión', () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        {
          provide: ServicioAuth,
          useValue: { isAuthenticated: () => true },
        },
      ],
    });

    const result = TestBed.runInInjectionContext(() => authGuard({} as never, {} as never));
    expect(result).toBe(true);
  });

  it('redirige a /ingreso sin sesión', () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        {
          provide: ServicioAuth,
          useValue: { isAuthenticated: () => false },
        },
      ],
    });

    const router = TestBed.inject(Router);
    const result = TestBed.runInInjectionContext(() => authGuard({} as never, {} as never));
    expect(result).toEqual(router.createUrlTree(['/ingreso']));
    expect(result instanceof UrlTree).toBe(true);
  });
});