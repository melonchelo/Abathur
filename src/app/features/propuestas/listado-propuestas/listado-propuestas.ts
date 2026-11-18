import { Component } from '@angular/core';

import { ESTADOS_PROPUESTA } from '../../../core/models/estado-propuesta';
import type { EstadoCarga } from '../../../core/models/estado-carga';
import type { Propuesta } from '../../../core/models/propuesta';
import { PipeEstadoPropuesta } from '../../../shared/pipes/pipe-estado-propuesta';
import {
  AvisoNoDisponible,
  crearErrorNoDisponible,
} from '../../../shared/ui/aviso-no-disponible/aviso-no-disponible';

/**
 * F-16 · Listado de propuestas (esqueleto).
 * Todavía no filtra por estado ni llama a la API.
 */
@Component({
  imports: [AvisoNoDisponible, PipeEstadoPropuesta],
  selector: 'app-listado-propuestas',
  styleUrl: './listado-propuestas.css',
  templateUrl: './listado-propuestas.html',
})
export class ListadoPropuestas {
  readonly tituloPantalla = 'Listado de propuestas';
  readonly codigoTicket = 'F-16';
  /** Referencia F-09 mientras el listado real no llama a la API. */
  readonly estadosReferencia = ESTADOS_PROPUESTA;

  /** Estado de la pantalla; hoy queda en el control de “no disponible”. */
  readonly estado: EstadoCarga<readonly Propuesta[]> = {
    status: 'error',
    error: crearErrorNoDisponible(this.tituloPantalla),
  };
}
