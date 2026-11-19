import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Subject, catchError, map, of, startWith, switchMap } from 'rxjs';

import { leerErrorApi } from '../../../core/leer-error-api';
import type { EstadoCarga } from '../../../core/models/estado-carga';
import {
  ESTADOS_PROPUESTA,
  type EstadoPropuesta,
} from '../../../core/models/estado-propuesta';
import type { Propuesta } from '../../../core/models/propuesta';
import { ServicioPropuestas } from '../../../core/servicio-propuestas';
import { DirectivaHasRole } from '../../../shared/directives/directiva-has-role';
import { PipeEstadoPropuesta } from '../../../shared/pipes/pipe-estado-propuesta';
import { AvisoNoDisponible } from '../../../shared/ui/aviso-no-disponible/aviso-no-disponible';

/**
 * F-16 · Listado de propuestas con filtro por estado y `EstadoCarga`.
 * El detalle (F-17) y el alta (F-18) abren un módulo incompleto.
 */
@Component({
  imports: [
    AvisoNoDisponible,
    DirectivaHasRole,
    PipeEstadoPropuesta,
    RouterLink,
  ],
  selector: 'app-listado-propuestas',
  styleUrl: './listado-propuestas.css',
  templateUrl: './listado-propuestas.html',
})
export class ListadoPropuestas {
  private readonly servicio = inject(ServicioPropuestas);
  private readonly recargar$ = new Subject<void>();

  readonly tituloPantalla = 'Listado de propuestas';
  readonly codigoTicket = 'F-16';
  readonly estados = ESTADOS_PROPUESTA;
  readonly filtroEstado = signal<EstadoPropuesta | ''>('');
  readonly estado = signal<EstadoCarga<readonly Propuesta[]>>({
    status: 'loading',
  });

  constructor() {
    this.recargar$
      .pipe(
        startWith(undefined),
        switchMap(() => {
          this.estado.set({ status: 'loading' });
          const status = this.filtroEstado();
          return this.servicio.listar(status === '' ? {} : { status }).pipe(
            map((propuestas) => ({ status: 'ready' as const, data: propuestas })),
            catchError((error: unknown) =>
              of({ status: 'error' as const, error: leerErrorApi(error) }),
            ),
          );
        }),
        takeUntilDestroyed(),
      )
      .subscribe((estado) => this.estado.set(estado));
  }

  cambiarFiltro(evento: Event): void {
    const destino = evento.target;
    if (!(destino instanceof HTMLSelectElement)) {
      return;
    }
    const valor = destino.value;
    this.filtroEstado.set(valor === '' ? '' : (valor as EstadoPropuesta));
    this.recargar$.next();
  }
}
