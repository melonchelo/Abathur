import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subject, catchError, map, of, startWith, switchMap } from 'rxjs';

import { leerErrorApi } from '../../../core/leer-error-api';
import type { ResumenArticulo } from '../../../core/models/articulo';
import type { EstadoCarga } from '../../../core/models/estado-carga';
import { ServicioArticulos } from '../../../core/servicio-articulos';
import { DirectivaHasRole } from '../../../shared/directives/directiva-has-role';
import { AvisoNoDisponible } from '../../../shared/ui/aviso-no-disponible/aviso-no-disponible';

/**
 * F-10 · Listado de artículos con `@for` / `@empty` y `EstadoCarga`.
 * El detalle (F-12) abre un módulo incompleto a propósito.
 */
@Component({
  imports: [AvisoNoDisponible, DirectivaHasRole, FormsModule, RouterLink],
  selector: 'app-listado-articulos',
  styleUrl: './listado-articulos.css',
  templateUrl: './listado-articulos.html',
})
export class ListadoArticulos {
  private readonly servicio = inject(ServicioArticulos);
  private readonly recargar$ = new Subject<void>();

  readonly tituloPantalla = 'Listado de artículos';
  readonly codigoTicket = 'F-10';
  readonly consulta = signal('');
  readonly estado = signal<EstadoCarga<readonly ResumenArticulo[]>>({
    status: 'loading',
  });

  constructor() {
    this.recargar$
      .pipe(
        startWith(undefined),
        switchMap(() => {
          this.estado.set({ status: 'loading' });
          return this.servicio.listar({ q: this.consulta() }).pipe(
            map((articulos) => ({ status: 'ready' as const, data: articulos })),
            catchError((error: unknown) =>
              of({ status: 'error' as const, error: leerErrorApi(error) }),
            ),
          );
        }),
        takeUntilDestroyed(),
      )
      .subscribe((estado) => this.estado.set(estado));
  }

  buscar(): void {
    this.recargar$.next();
  }
}
