import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import type { ErrorApi } from './models/error-api';
import { leerErrorApi } from './leer-error-api';

describe('leerErrorApi (F-05)', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  /** Función auxiliar del spec · captura el `ErrorApi` del subscribe de error. */
  function capturarError(url: string): { actual: ErrorApi | undefined } {
    const recibido: { actual: ErrorApi | undefined } = { actual: undefined };
    http.get(url).subscribe({
      error: (error: unknown) => {
        recibido.actual = leerErrorApi(error);
      },
    });
    return recibido;
  }

  it('traduce un error de red', () => {
    const recibido = capturarError('/api/articles');

    httpMock.expectOne('/api/articles').error(new ProgressEvent('error'));

    expect(recibido.actual).toEqual({
      code: 'NETWORK_ERROR',
      message: 'No se pudo conectar con el servidor.',
    });
  });

  it('lee el cuerpo de la API', () => {
    const recibido = capturarError('/api/auth/login');

    httpMock
      .expectOne('/api/auth/login')
      .flush(
        { code: 'INVALID_CREDENTIALS', message: 'Usuario o contraseña incorrectos.' },
        { status: 401, statusText: 'Unauthorized' },
      );

    expect(recibido.actual).toEqual({
      code: 'INVALID_CREDENTIALS',
      message: 'Usuario o contraseña incorrectos.',
    });
  });

  it('no usa un cuerpo que no es ErrorApi', () => {
    const recibido = capturarError('/api/articles');

    httpMock
      .expectOne('/api/articles')
      .flush('<html>falló</html>', { status: 502, statusText: 'Bad Gateway' });

    expect(recibido.actual).toEqual({
      code: 'UNREADABLE_ERROR',
      message: 'La respuesta de error no tiene el formato de la API.',
    });
  });

  it('cubre un valor que no viene de HttpClient', () => {
    expect(leerErrorApi(new Error('roto'))).toEqual({
      code: 'UNKNOWN_ERROR',
      message: 'Ocurrió un error inesperado.',
    });
  });
});
