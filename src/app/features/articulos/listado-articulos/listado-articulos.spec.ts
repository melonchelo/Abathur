import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { API_BASE_URL } from '../../../core/api-url.token';
import type { ResumenArticulo } from '../../../core/models/articulo';
import { ListadoArticulos } from './listado-articulos';

const ARTICULO: ResumenArticulo = {
  id: 'a-apertura-caja',
  title: 'Apertura de caja',
  summary: 'Cómo abrir la caja al inicio del turno.',
  categoryId: 'c-caja',
  currentVersionId: 'v-apertura-caja-2',
  currentVersionNumber: 2,
  createdBy: 'u-lucia',
  createdAt: '2026-01-01T00:00:00.000Z',
  updatedAt: '2026-01-02T00:00:00.000Z',
  underReview: true,
};

describe('ListadoArticulos (F-10)', () => {
  let componente: ListadoArticulos;
  let fixture: ComponentFixture<ListadoArticulos>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoArticulos],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: API_BASE_URL, useValue: 'http://localhost:3000/api' },
      ],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ListadoArticulos);
    componente = fixture.componentInstance;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('se crea y queda en carga hasta que responde la API', () => {
    expect(componente).toBeTruthy();
    expect(componente.estado().status).toBe('loading');
    httpMock.expectOne('http://localhost:3000/api/articles').flush([]);
  });

  it('lista artículos cuando la API responde', async () => {
    httpMock.expectOne('http://localhost:3000/api/articles').flush([ARTICULO]);
    await fixture.whenStable();
    fixture.detectChanges();
    const texto = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(componente.estado().status).toBe('ready');
    expect(texto).toContain('Apertura de caja');
  });

  it('muestra el error de la API sin trabarse', async () => {
    httpMock.expectOne('http://localhost:3000/api/articles').flush(
      { code: 'NETWORK_ERROR', message: 'No se pudo conectar con el servidor.' },
      { status: 0, statusText: 'Unknown Error' },
    );
    await fixture.whenStable();
    fixture.detectChanges();
    const texto = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(componente.estado().status).toBe('error');
    expect(texto).toContain('No se pudo conectar con el servidor.');
  });
});
