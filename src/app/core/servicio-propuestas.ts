import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from './api-url.token';
import type { EstadoPropuesta, Propuesta } from './models';

export interface FiltrosPropuesta {
  status?: EstadoPropuesta;
}

/**
 * F-16 · GET de propuestas.
 * Detalle, alta, voto y decisión se muestran como módulo incompleto.
 */
@Injectable({ providedIn: 'root' })
export class ServicioPropuestas {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  listar(filtros: FiltrosPropuesta = {}): Observable<readonly Propuesta[]> {
    let params = new HttpParams();
    if (filtros.status !== undefined) {
      params = params.set('status', filtros.status);
    }
    return this.http.get<readonly Propuesta[]>(`${this.baseUrl}/proposals`, {
      params,
    });
  }
}

/** Alias del backlog (`ProposalsService`). */
export { ServicioPropuestas as ProposalsService };
