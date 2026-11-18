import { HttpErrorResponse } from '@angular/common/http';

import { crearErrorApi, type ErrorApi } from './models/error-api';

/** Respuestas fijas cuando el cuerpo no trae el contrato de la API. */
const ERROR_DE_RED = crearErrorApi(
  'NETWORK_ERROR',
  'No se pudo conectar con el servidor.',
);

const ERROR_ILEGIBLE = crearErrorApi(
  'UNREADABLE_ERROR',
  'La respuesta de error no tiene el formato de la API.',
);

const ERROR_DESCONOCIDO = crearErrorApi(
  'UNKNOWN_ERROR',
  'Ocurrió un error inesperado.',
);

/** Type guard · ¿es un objeto plano (no `null`)? */
function esRegistro(valor: unknown): valor is Record<string, unknown> {
  return typeof valor === 'object' && valor !== null;
}

/**
 * Type guard · el JSON de error es `{ code, message }`.
 * Cualquier otra forma no cuenta como `ErrorApi`.
 */
function esErrorApi(valor: unknown): valor is ErrorApi {
  if (!esRegistro(valor)) {
    return false;
  }

  const codigo = valor['code'];
  const mensaje = valor['message'];
  return typeof codigo === 'string' && typeof mensaje === 'string';
}

/**
 * `HttpErrorResponse.error` llega como `any` en tipados viejos.
 * Anotarlo `unknown` lo saca de `any` sin un cast: a partir de ahí solo entran los guards.
 */
function cuerpoErrorHttp(respuesta: HttpErrorResponse): unknown {
  const cuerpo: unknown = respuesta.error;
  return cuerpo;
}

/** Función auxiliar · traduce un `HttpErrorResponse` al contrato. */
function leerErrorHttp(respuesta: HttpErrorResponse): ErrorApi {
  if (respuesta.status === 0) {
    return ERROR_DE_RED;
  }

  const cuerpo = cuerpoErrorHttp(respuesta);
  if (esErrorApi(cuerpo)) {
    return crearErrorApi(cuerpo.code, cuerpo.message);
  }

  return ERROR_ILEGIBLE;
}

/**
 * F-05 · Función `leerErrorApi`.
 * Estrecha el error de `HttpClient` (o un cuerpo ya parseado) al contrato `ErrorApi`.
 * Sin casts a `any`: solo `unknown` y type guards.
 */
export function leerErrorApi(error: unknown): ErrorApi {
  if (error instanceof HttpErrorResponse) {
    return leerErrorHttp(error);
  }

  if (esErrorApi(error)) {
    return crearErrorApi(error.code, error.message);
  }

  return ERROR_DESCONOCIDO;
}

/** Alias del backlog (`readApiError`). */
export const readApiError = leerErrorApi;
