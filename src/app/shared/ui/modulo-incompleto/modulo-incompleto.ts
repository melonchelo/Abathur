import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { crearErrorApi, type ErrorApi } from '../../../core/models/error-api';
import { AvisoNoDisponible } from '../aviso-no-disponible/aviso-no-disponible';

function leerTexto(valor: unknown, respaldo: string): string {
  return typeof valor === 'string' && valor !== '' ? valor : respaldo;
}

/**
 * Pantalla genérica para tickets que todavía no se implementan.
 * La ruta no se traba: muestra “módulo incompleto” y deja volver.
 */
@Component({
  selector: 'app-modulo-incompleto',
  imports: [AvisoNoDisponible, RouterLink],
  templateUrl: './modulo-incompleto.html',
  styleUrl: './modulo-incompleto.css',
})
export class ModuloIncompleto {
  private readonly datos = inject(ActivatedRoute).snapshot.data;

  readonly titulo = leerTexto(this.datos['titulo'], 'Módulo incompleto');
  readonly ticket = leerTexto(this.datos['ticket'], '');
  readonly error: ErrorApi = crearErrorApi(
    'MODULO_INCOMPLETO',
    leerTexto(
      this.datos['detalle'],
      `Este módulo todavía está pendiente${this.ticket === '' ? '' : ` (${this.ticket})`}. El resto de la app sigue funcionando.`,
    ),
  );
}
