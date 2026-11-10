import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/layout/shell/shell').then((component) => component.Shell),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/home/home').then((component) => component.Home),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./features/not-found/not-found').then(
            (component) => component.NotFound,
          ),
      },
    ],
  },
];