import { Component, input } from '@angular/core';

import { crearErrorApi, type ErrorApi } from '../../../core/models/error-api';

/**
 * constructor_alias · error tipado para pantallas que todavía no están cableadas.
 * Código fijo: `COMPONENTE_NO_DISPONIBLE`.
 */
export function crearErrorNoDisponible(
  nombrePantalla: string,
): ErrorApi {
  return crearErrorApi(
    'COMPONENTE_NO_DISPONIBLE',
    `Este componente todavía no está disponible: ${nombrePantalla}.`,
  );
}

/**
 * Componente compartido · muestra el aviso de “todavía no disponible”.
 * Las pantallas esqueleto lo usan dentro del `@switch` de `EstadoCarga`.
 */
@Component({
  selector: 'app-aviso-no-disponible',
  styleUrl: './aviso-no-disponible.css',
  templateUrl: './aviso-no-disponible.html',
})
export class AvisoNoDisponible {
  /** Nombre legible de la pantalla (ej. «Listado de artículos»). */
  readonly nombrePantalla = input.required<string>();

  /** Id de tarjeta del backlog, si aplica (ej. `F-10`). */
  readonly codigoTicket = input('');

  /** Mensaje de error ya armado; si no viene, se construye acá. */
  readonly error = input<ErrorApi | null>(null);

  /** Método · elige el mensaje a mostrar en la plantilla. */
  mensajeVisible(): string {
    const errorActual = this.error();
    if (errorActual !== null) {
      return errorActual.message;
    }
    return crearErrorNoDisponible(this.nombrePantalla()).message;
  }
}
