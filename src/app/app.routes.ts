import { Route, Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

function rutaModuloIncompleto(path: string, titulo: string, ticket: string): Route {
  return {
    path,
    loadComponent: () =>
      import('./shared/ui/modulo-incompleto/modulo-incompleto').then(
        (modulo) => modulo.ModuloIncompleto,
      ),
    data: { titulo, ticket },
  };
}

/**
 * Recorrido ejecutable: ingreso + listados HTTP + avisos de módulo incompleto.
 * Las rutas pendientes no 404 ni se traban: muestran el ticket que falta.
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
        path: 'articulos/nuevo',
        canActivate: [roleGuard('admin')],
        loadComponent: () =>
          import('./shared/ui/modulo-incompleto/modulo-incompleto').then(
            (modulo) => modulo.ModuloIncompleto,
          ),
        data: { titulo: 'Alta de artículo base', ticket: 'F-26' },
      },
      rutaModuloIncompleto(
        'articulos/:articleId/versiones',
        'Historial de versiones',
        'F-15',
      ),
      rutaModuloIncompleto('articulos/:articleId', 'Detalle de artículo', 'F-12'),
      rutaModuloIncompleto('categorias', 'Árbol de categorías', 'F-14'),
      {
        path: 'propuestas',
        loadComponent: () =>
          import(
            './features/propuestas/listado-propuestas/listado-propuestas'
          ).then((modulo) => modulo.ListadoPropuestas),
      },
      {
        path: 'propuestas/nueva',
        canActivate: [roleGuard('cliente', 'moderador')],
        loadComponent: () =>
          import('./shared/ui/modulo-incompleto/modulo-incompleto').then(
            (modulo) => modulo.ModuloIncompleto,
          ),
        data: { titulo: 'Nueva propuesta', ticket: 'F-18' },
      },
      rutaModuloIncompleto(
        'propuestas/:proposalId',
        'Detalle de propuesta',
        'F-17',
      ),
      rutaModuloIncompleto(
        'personas/:userId/reputacion',
        'Reputación',
        'F-29',
      ),
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
