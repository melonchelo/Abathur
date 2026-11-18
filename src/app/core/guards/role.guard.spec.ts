import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { roleGuard } from './role.guard';
import { ServicioAuth } from '../servicio-auth';

describe('roleGuard (F-08)', () => {
  it('bloquea si el rol no alcanza', () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        {
          provide: ServicioAuth,
          useValue: {
            isAuthenticated: () => true,
            hasRole: () => false,
          },
        },
      ],
    });

    const router = TestBed.inject(Router);
    const guardCliente = roleGuard('admin');
    const result = TestBed.runInInjectionContext(() =>
      guardCliente({} as never, {} as never),
    );
    expect(result).toEqual(router.createUrlTree(['/']));
  });

  it('permite si el rol coincide', () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        {
          provide: ServicioAuth,
          useValue: {
            isAuthenticated: () => true,
            hasRole: () => true,
          },
        },
      ],
    });

    const guardAdmin = roleGuard('admin');
    const result = TestBed.runInInjectionContext(() =>
      guardAdmin({} as never, {} as never),
    );
    expect(result).toBe(true);
  });
});