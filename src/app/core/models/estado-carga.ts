import type { ErrorApi } from './error-api';

/**
 * F-03 · Estado de carga de una pantalla o store.
 * La plantilla hace `@switch (estado.status)` entre carga, error y listo.
 */
export type EstadoCarga<T> =
  | { status: 'loading' }
  | { status: 'error'; error: ErrorApi }
  | { status: 'ready'; data: T };

/** Alias del backlog (`LoadState`). */
export type LoadState<T> = EstadoCarga<T>;
