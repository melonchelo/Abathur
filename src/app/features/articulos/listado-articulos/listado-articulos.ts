import { Component } from '@angular/core';

import type { ResumenArticulo } from '../../../core/models/articulo';
import type { EstadoCarga } from '../../../core/models/estado-carga';
import {
  AvisoNoDisponible,
  crearErrorNoDisponible,
} from '../../../shared/ui/aviso-no-disponible/aviso-no-disponible';

/**
 * F-10 · Listado de artículos (esqueleto).
 * Todavía no llama a la API: deja el `EstadoCarga` en error tipado.
 */
@Component({
  imports: [AvisoNoDisponible],
  selector: 'app-listado-articulos',
  styleUrl: './listado-articulos.css',
  templateUrl: './listado-articulos.html',
})
export class ListadoArticulos {
  readonly tituloPantalla = 'Listado de artículos';
  readonly codigoTicket = 'F-10';

  /**
   * Estado de la pantalla.
   * Cuando exista el servicio HTTP, pasará por `loading` → `ready` / `error`.
   */
  readonly estado: EstadoCarga<readonly ResumenArticulo[]> = {
    status: 'error',
    error: crearErrorNoDisponible(this.tituloPantalla),
  };
}
