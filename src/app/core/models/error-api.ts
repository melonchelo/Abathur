/**
 * F-03 · Cuerpo de toda respuesta de error de la API.
 * El JSON trae exactamente `code` y `message`.
 */
export interface ErrorApi {
  code: string;
  message: string;
}

/** Alias del backlog (`ApiError`). */
export type ApiError = ErrorApi;

/**
 * constructor_alias · arma un `ErrorApi` tipado.
 * Sirve para mostrar en la defensa un “constructor” sin clase ni `any`.
 */
export function crearErrorApi(code: string, message: string): ErrorApi {
  return { code, message };
}
