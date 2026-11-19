import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { API_BASE_URL } from '../../../core/api-url.token';
import type { Propuesta } from '../../../core/models/propuesta';
import { ListadoPropuestas } from './listado-propuestas';

const PROPUESTA: Propuesta = {
  id: 'p-en-votacion',
  kind: 'modificacion',
  articleId: 'a-apertura-caja',
  baseVersionId: 'v-apertura-caja-2',
  authorId: 'u-ana',
  authorAlias: 'Ana',
  proposed: {
    title: 'Apertura de caja con doble conteo',
    summary: 'Sumar un testigo.',
    content: '# Apertura\n\n- Contar\n',
    categoryId: 'c-caja',
    tags: [],
    sources: [],
  },
  status: 'en_votacion',
  communityResult: null,
  tally: { votes: 2, favor: 1, contra: 1, quorum: false },
  votingOpenedAt: '2026-01-03T00:00:00.000Z',
  votingClosedAt: null,
  decision: null,
  createdAt: '2026-01-02T00:00:00.000Z',
};

describe('ListadoPropuestas (F-16)', () => {
  let componente: ListadoPropuestas;
  let fixture: ComponentFixture<ListadoPropuestas>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPropuestas],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: API_BASE_URL, useValue: 'http://localhost:3000/api' },
      ],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ListadoPropuestas);
    componente = fixture.componentInstance;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('se crea y queda en carga hasta que responde la API', () => {
    expect(componente).toBeTruthy();
    expect(componente.estado().status).toBe('loading');
    httpMock.expectOne('http://localhost:3000/api/proposals').flush([]);
  });

  it('lista propuestas y usa el pipe de estado', async () => {
    httpMock.expectOne('http://localhost:3000/api/proposals').flush([PROPUESTA]);
    await fixture.whenStable();
    fixture.detectChanges();
    const texto = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(componente.estado().status).toBe('ready');
    expect(texto).toContain('Apertura de caja con doble conteo');
    expect(texto).toContain('En votación');
  });

  it('muestra el error de la API sin trabarse', async () => {
    httpMock.expectOne('http://localhost:3000/api/proposals').flush(
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
