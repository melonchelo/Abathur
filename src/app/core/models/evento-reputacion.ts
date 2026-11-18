/** F-03 · Tipo de evento que mueve el puntaje. */
export type TipoEventoReputacion =
  | 'asignacion_inicial'
  | 'aporte_respaldado'
  | 'error_comprobado'
  | 'conducta_abusiva';

/** Alias del contrato del backend (`ReputationEventType`). */
export type ReputationEventType = TipoEventoReputacion;

/**
 * F-03 · Evento de reputación.
 * El puntaje de pantalla es la suma de los `delta`.
 */
export interface EventoReputacion {
  id: string;
  userId: string;
  eventType: TipoEventoReputacion;
  /** Origen: usuario, propuesta o auditoría según el tipo. */
  sourceId: string;
  delta: number;
  createdAt: string;
}

/** Alias del contrato del backend (`ReputationEvent`). */
export type ReputationEvent = EventoReputacion;

/** Resumen para la pantalla `/personas/:userId/reputacion`. */
export interface ResumenReputacion {
  userId: string;
  score: number;
  weight: number;
  events: readonly EventoReputacion[];
}

/** Alias del contrato del backend (`ReputationSummary`). */
export type ReputationSummary = ResumenReputacion;
