import { Routes } from '@angular/router';

/**
 * F-06 · Rutas con `loadComponent`.
 * F-10 / F-16 · listados esqueleto dentro de la carcasa.
 * La ruta `**` queda al final: página no encontrada.
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
        path: '**',
        loadComponent: () =>
          import('./features/no-encontrado/no-encontrado').then(
            (modulo) => modulo.NoEncontrado,
          ),
      },
    ],
  },
];
