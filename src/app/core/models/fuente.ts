/**
 * F-03 · Fuente citada en un artículo o propuesta.
 * Propiedades en inglés: coinciden con el JSON de la API.
 */
export interface Fuente {
  title: string;
  url: string;
}

/** Alias del contrato del backend (`Source`). */
export type Source = Fuente;
