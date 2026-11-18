import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

/**
 * F-06 · Rutas con `loadComponent`.
 * F-07/F-08 · ingreso público; carcasa privada con `authGuard` y `roleGuard`.
 */
export const routes: Routes = [
  {
    path: 'ingreso',
    loadComponent: () =>
      import('./features/ingreso/ingreso').then((modulo) => modulo.Ingreso),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./shared/layout/carcasa/carcasa').then((modulo) => modulo.Carcasa),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/inicio/inicio').then((modulo) => modulo.Inicio),
      },
      {
        path: 'articulos',
        loadComponent: () =>
          import('./features/articulos/listado-articulos/listado-articulos').then(
            (modulo) => modulo.ListadoArticulos,
          ),
      },
      {
        path: 'propuestas',
        loadComponent: () =>
          import(
            './features/propuestas/listado-propuestas/listado-propuestas'
          ).then((modulo) => modulo.ListadoPropuestas),
      },
      {
        path: 'admin',
        canActivate: [roleGuard('admin')],
        loadComponent: () =>
          import('./features/admin/aviso-solo-admin/aviso-solo-admin').then(
            (modulo) => modulo.AvisoSoloAdmin,
          ),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./features/no-encontrado/no-encontrado').then(
            (modulo) => modulo.NoEncontrado,
          ),
      },
    ],
  },
];