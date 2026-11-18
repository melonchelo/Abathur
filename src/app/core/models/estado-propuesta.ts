/**
 * F-03 · Estado de una propuesta.
 * Unión de literales: el mismo valor viaja en el JSON.
 */
export type EstadoPropuesta =
  | 'abierta'
  | 'en_votacion'
  | 'recomendada'
  | 'desaconsejada'
  | 'controvertida'
  | 'aceptada'
  | 'rechazada';

/** Alias del backlog (`ProposalStatus`). */
export type ProposalStatus = EstadoPropuesta;

/** Lista cerrada para filtros y pipes (`Record<EstadoPropuesta, string>`). */
export const ESTADOS_PROPUESTA: readonly EstadoPropuesta[] = [
  'abierta',
  'en_votacion',
  'recomendada',
  'desaconsejada',
  'controvertida',
  'aceptada',
  'rechazada',
];
