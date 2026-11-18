import { Pipe, PipeTransform } from '@angular/core';

import type { EstadoPropuesta, ProposalStatus } from '../../core/models';

const ETIQUETAS: Record<EstadoPropuesta, string> = {
  abierta: 'Abierta',
  en_votacion: 'En votación',
  recomendada: 'Recomendada',
  desaconsejada: 'Desaconsejada',
  controvertida: 'Controvertida',
  aceptada: 'Aceptada',
  rechazada: 'Rechazada',
};

/**
 * F-09 · Etiquetas legibles para `EstadoPropuesta`.
 * El `Record` exige las siete claves: si falta un estado, falla el compilador.
 */
@Pipe({ name: 'estadoPropuesta' })
export class PipeEstadoPropuesta implements PipeTransform {
  transform(value: EstadoPropuesta | ProposalStatus): string {
    return ETIQUETAS[value];
  }
}

/** Alias del backlog (`EstadoPropuestaPipe`). */
export { PipeEstadoPropuesta as EstadoPropuestaPipe };