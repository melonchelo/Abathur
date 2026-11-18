import { Routes } from '@angular/router';

/**
 * F-06 · Rutas con `loadComponent`.
 * La carcasa envuelve las pantallas; `**` cae en no encontrado.
 */
export const routes: Routes = [
  {
    path: '',
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
        path: '**',
        loadComponent: () =>
          import('./features/no-encontrado/no-encontrado').then(
            (modulo) => modulo.NoEncontrado,
          ),
      },
    ],
  },
];
