import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from './api-url.token';
import type { ResumenArticulo } from './models';

export interface FiltrosArticulo {
  q?: string;
  categoryId?: string;
}

/**
 * F-10 · GET de artículos publicados.
 * El detalle Markdown (F-12) todavía no se cablea en pantalla.
 */
@Injectable({ providedIn: 'root' })
export class ServicioArticulos {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  listar(filtros: FiltrosArticulo = {}): Observable<readonly ResumenArticulo[]> {
    let params = new HttpParams();
    if (filtros.q !== undefined && filtros.q !== '') {
      params = params.set('q', filtros.q);
    }
    if (filtros.categoryId !== undefined && filtros.categoryId !== '') {
      params = params.set('categoryId', filtros.categoryId);
    }
    return this.http.get<readonly ResumenArticulo[]>(`${this.baseUrl}/articles`, {
      params,
    });
  }
}

/** Alias del backlog (`ArticlesService`). */
export { ServicioArticulos as ArticlesService };
